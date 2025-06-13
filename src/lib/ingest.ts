import { config } from 'dotenv';
import { sql } from '@vercel/postgres';
import { VercelPostgres } from '@langchain/community/vectorstores/vercel_postgres';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { CheerioWebBaseLoader } from '@langchain/community/document_loaders/web/cheerio';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

// Load environment variables from .env.local
config({ path: '.env.local' });

// IMPORTANT: Update these URLs to your live website URLs
const urls = [
  'https://www.reignit.io/',
  'https://www.reignit.io/about',
  'https://www.reignit.io/careers',
  'https://www.reignit.io/blog',
];

async function main() {
  // Verify that all necessary environment variables are set
  if (
    !process.env.GOOGLE_API_KEY ||
    !process.env.POSTGRES_URL
  ) {
    throw new Error(
      'Missing GOOGLE_API_KEY or POSTGRES_URL. Please check your .env.local file.'
    );
  }

  console.log('Starting knowledge base ingestion...');
  let store;
  try {
    // Ensure the pgvector extension is enabled
    await sql`CREATE EXTENSION IF NOT EXISTS vector`;
    console.log('Ensured pgvector extension is enabled.');

    // 1. Load documents from web pages
    console.log('Loading documents from URLs...');
    const docs = (
      await Promise.all(
        urls.map((url) => {
          const loader = new CheerioWebBaseLoader(url);
          return loader.load();
        })
      )
    ).flat();
    console.log(`Loaded ${docs.length} documents.`);

    // 2. Split documents into smaller chunks
    console.log('Splitting documents into chunks...');
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const chunks = await textSplitter.splitDocuments(docs);
    console.log(`Created ${chunks.length} document chunks.`);

    // 3. Create embeddings model
    console.log('Creating embeddings model...');
    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: process.env.GOOGLE_API_KEY,
      modelName: 'embedding-001',
    });

    // 4. Initialize Vercel Postgres vector store using the static .initialize() method
    console.log('Initializing Vercel Postgres vector store...');
    store = await VercelPostgres.initialize(embeddings, {
      tableName: 'reignit_kb',
    });

    // 5. Add documents to the vector store
    console.log('Adding documents to the vector store...');
    await store.addDocuments(chunks);

    console.log(' Knowledge base ingestion complete!');
  } catch (error) {
    console.error('An error occurred during ingestion:', error);
    process.exit(1);
  } finally {
    // 6. Close the database connection
    if (store) {
      await store.end();
      console.log('Database connection closed.');
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
