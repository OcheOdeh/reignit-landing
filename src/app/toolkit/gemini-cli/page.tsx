"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EXTENSIONS = [
    { title: "context7", description: "Up-to-date code docs for any prompt", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/github/github-mcp-server" },
    { title: "github", description: "GitHub's official MCP Server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/ChromeDevTools/chrome-devtools-mcp" },
    { title: "chrome-devtools-mcp", description: "Chrome DevTools for coding agents", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/googleapis/genai-toolbox" },
    { title: "mcp-toolbox-for-databases", description: "MCP Toolbox for Databases is an open-source MCP server for more than 30 different datasources.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/google/clasp" },
    { title: "clasp", description: "Manage Google Apps Script projects with command-line tools.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/exa-labs/exa-mcp-server" },
    { title: "exa-mcp-server", description: "Official Exa MCP for web search, web crawling and getting technical code docs.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/grafana/mcp-grafana" },
    { title: "grafana", description: "MCP server for Grafana", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/Flux159/mcp-server-kubernetes" },
    { title: "mcp-server-kubernetes", description: "MCP Server for kubernetes management commands", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/stripe/ai" },
    { title: "stripe", description: "One-stop shop for building AI-powered products and businesses with Stripe.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/hashicorp/terraform-mcp-server" },
    { title: "terraform", description: "The Terraform MCP Server provides seamless integration with Terraform ecosystem.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/elevenlabs/elevenlabs-mcp" },
    { title: "elevenlabs", description: "ElevenLabs extension for text-to-speech, voice design, conversational AI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/TencentCloudBase/CloudBase-AI-ToolKit" },
    { title: "cloudbase-ai-toolkit", description: "Tencent CloudBase MCP Server - AI-powered development toolkit.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/neo4j-contrib/mcp-neo4j" },
    { title: "mcp-neo4j", description: "Model Context Protocol with Neo4j", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/nanobanana" },
    { title: "nanobanana", description: "Gemini CLI extension for Nano Banana models.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/GoogleCloudPlatform/cloud-run-mcp" },
    { title: "cloud-run", description: "MCP server to deploy apps to Cloud Run", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/qodo-ai/open-aware" },
    { title: "open-aware", description: "Aware - Deep Code Research Agent for Complex Codebase & Knowledge", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/redis/mcp-redis" },
    { title: "redis", description: "Manage and search data in Redis efficiently within Gemini CLI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/mondaycom/mcp" },
    { title: "monday", description: "Manage your monday.com projects, tasks, and everday work.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/flutter" },
    { title: "flutter", description: "Enables several Flutter and Dart-related commands and context.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/security" },
    { title: "gemini-cli-security", description: "Google's Security extension for the Gemini CLI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/clduab11/gemini-flow" },
    { title: "gemini-flow", description: "Comprehensive AI orchestration platform with 9 MCP servers.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/code-review" },
    { title: "code-review", description: "Google's Code Review extension for the Gemini CLI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/zilliztech/mcp-server-milvus" },
    { title: "mcp-server-milvus", description: "Model Context Protocol Servers for Milvus", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/jules" },
    { title: "gemini-cli-jules", description: "Orchestrate the Jules asynchronous agent to perform coding tasks.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/SonarSource/sonarqube-mcp-server" },
    { title: "sonarqube-mcp-server", description: "SonarQube MCP Server extension enables seamless integration with SonarQube.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/dynatrace-oss/dynatrace-mcp" },
    { title: "dynatrace-mcp-server", description: "MCP server for Dynatrace Observability", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/huggingface/hf-mcp-server" },
    { title: "huggingface", description: "Provides access to the Hugging Face Hub.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/genkit" },
    { title: "genkit", description: "Build full-stack AI-powered apps using Genkit.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/e2e-test-quest/uuv" },
    { title: "uuv", description: "Integrates the Unified UUV Testing Framework into Gemini.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/harish-garg/gemini-cli-prompt-library" },
    { title: "gemini-cli-prompt-library", description: "A curated library of high-quality, professionally crafted prompts.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/confluentinc/mcp-confluent" },
    { title: "mcp-confluent", description: "Confluent MCP Server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/atlassian/atlassian-mcp-server" },
    { title: "atlassian-rovo-mcp-server", description: "Remote MCP Server that securely connects Jira and Confluence.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/postmanlabs/postman-mcp-server" },
    { title: "postman", description: "Connect your AI to your APIs on Postman", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/GoogleCloudPlatform/gke-mcp" },
    { title: "gke-mcp", description: "Gemini CLI extension for Google Kubernetes Engine.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/elastic/gemini-cli-elasticsearch" },
    { title: "elasticsearch", description: "Official Elasticsearch extension for Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/workspace" },
    { title: "google-workspace", description: "Access Google Workspace when using Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/firebase" },
    { title: "firebase", description: "Prototype, build & run modern apps users love with Firebase.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/huggingface/skills" },
    { title: "huggingface-skills", description: "Provides access to the Hugging Face Skills.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/googlemaps/platform-ai" },
    { title: "google-maps-platform", description: "Ground agents on fresh, official Google Maps Platform documentation.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/figma/figma-gemini-cli-extension" },
    { title: "Figma", description: "Integrate Figma into your workflow: Generate code from frames.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/abagames/slash-criticalthink" },
    { title: "criticalthink", description: "Embeds healthy skepticism into the dialogue process.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/pinecone-io/pinecone-mcp" },
    { title: "pinecone-mcp", description: "Connect your Pinecone projects to Cursor, Claude, and other AI assistants.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/mcp-toolbox" },
    { title: "mcp-toolbox", description: "Load custom tools using MCP Toolbox for Databases", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/automateyournetwork/GeminiCLI_ComputerUse_Extension" },
    { title: "ComputerUse", description: "Gemini Computer Use - autonomous web browsing and testing.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/postgres" },
    { title: "postgres", description: "Connect and interact with a PostgreSQL database and data", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/markmcd/gemini-docs-ext" },
    { title: "gemini-docs-ext", description: "Gemini CLI extension that adds Gemini API docs and MCP", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/GoogleCloudPlatform/gemini-cloud-assist-mcp" },
    { title: "GeminiCloudAssist", description: "An MCP Server for Gemini Cloud Assist.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/simonliu-ai-product/adk-agent-extension" },
    { title: "google-adk-agent-extension", description: "Gemini CLI extension for Google ADK AI Agent Application.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gplasky/gemini-cli-blueprint-extension" },
    { title: "blueprint", description: "Gemini CLI extension that guides software development.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jsdelivr/globalping-mcp-server" },
    { title: "globalping", description: "Interact with a global network of probes and run network measurements.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/automateyournetwork/GeminiCLI_Vision_Extension" },
    { title: "vision", description: "Enable your webcame or connected iPhone and take pictures.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/googleworkspace/developer-tools" },
    { title: "google-workspace-developer-tools", description: "Google Workspace Developer Tools", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/gcloud" },
    { title: "gcloud", description: "Enable MCP-compatible AI agents to interact with Google Cloud.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/danicat/speedgrapher" },
    { title: "speedgrapher", description: "A local MCP server for writers to streamline the writing process.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/bitrise-io/bitrise-mcp" },
    { title: "bitrise", description: "MCP Server for the Bitrise API.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/thoughtspot/mcp-server" },
    { title: "ThoughtSpot", description: "The ThoughtSpot MCP Server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/looker" },
    { title: "looker", description: "Connect to Looker", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/cloud-sql-postgresql" },
    { title: "cloud-sql-postgresql", description: "Create, connect, and interact with a Cloud SQL for PostgreSQL database.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/harness/mcp-server" },
    { title: "harness-platform", description: "Comprehensive Harness Platform integration.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/OutlineDriven/outline-driven-development" },
    { title: "outline-driven-development", description: "Outline Driven Development – Beyond specs using AST analysis.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/endorlabs/gemini-extension" },
    { title: "Endor-Labs-Code-Security", description: "Secure copilot for coding assistants", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/automateyournetwork/GeminiCLI_File_Search_Extension" },
    { title: "FileSearch", description: "Built in Cloud Retrieval Augemented Generation (RAG) capabilities.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/hashicorp/vault-mcp-server" },
    { title: "vault", description: "HashiCorp Vault MCP server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jduncan-rva/skill-porter" },
    { title: "skill-porter", description: "Converts Claude Code skills to Gemini CLI extensions and vice versa.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/observability" },
    { title: "observability", description: "Enable MCP-compatible AI agents to interact with Google Cloud.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/datacommons" },
    { title: "datacommons", description: "Query public datasets from Data Commons using natural language.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/firestore-native" },
    { title: "firestore-native", description: "Connect and interact with Firestore databases.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/bigquery-data-analytics" },
    { title: "bigquery-data-analytics", description: "Connect, query, and generate data insights for BigQuery datasets.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/mysql" },
    { title: "mysql", description: "Connect and interact with a MySQL database", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/Shopify/dev-mcp-gemini-cli" },
    { title: "shopify-dev-mcp", description: "Setup the Shopify Dev MCP with the Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/planetis-m/study-ai" },
    { title: "study-ai", description: "Study-AI extension for qwen-code/gemini-cli", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/sql-server" },
    { title: "sql-server", description: "Connect to SQL Server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/bigquery-conversational-analytics" },
    { title: "bigquery-analytics", description: "Connect, query, and generate data insights for BigQuery datasets.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/automateyournetwork/GeminiCLI_Packet_Buddy_Extension" },
    { title: "PacketBuddy", description: "Chat with packet captures with RAG and MCP", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/suprsend/cli" },
    { title: "suprsend", description: "SuprSend CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/tanaikech/ToolsForMCPServer-extension" },
    { title: "tools-for-mcp-server", description: "Simplified Google Workspace Automation with Gemini CLI Extensions", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/palladius/gemini-cli-custom-commands" },
    { title: "palladius-commands", description: "Ricc's golden custom commands", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/diegorafs/Chrome-DevTools-MCP" },
    { title: "chrome-devtools-mcp", description: "AI-powered Chrome automation server.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/alloydb" },
    { title: "alloydb", description: "Create, connect, and interact with an AlloyDB for PostgreSQL database.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/spanner" },
    { title: "spanner", description: "Connect and interact with Spanner data using natural language.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/canva-sdks/canva-gemini-extension" },
    { title: "canva", description: "Canva integration for Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/derailed-dash/adk-docs-ext" },
    { title: "adk-docs-ext", description: "Provides Gemini with up-to-date information about ADK.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/rebekahx23/chime" },
    { title: "chime", description: "Get notified by your Gemini CLI with audible notifications.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/rafeekpro/GeminiAutoPM" },
    { title: "gemini-autopm", description: "Intelligent Project Management Framework for Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/ox01024/gemini-cli-git" },
    { title: "gemini-cli-git", description: "Convenient Git commands to streamline your development workflow.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/automateyournetwork/pyATS_GeminiCLI_Extension" },
    { title: "pyATS", description: "An easy to install pyATS extension for Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gke-labs/gemini-for-kubernetes-development" },
    { title: "gemini-kubernetes-dev", description: "Gemini for Kubernetes development", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/wandb/wandb-mcp-server" },
    { title: "wandb-mcp-server", description: "Official implementation of the W&B Models and Weave MCP server.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/snyk/agentic-integration-wrappers" },
    { title: "Snyk", description: "Provides wrappers to integrate with agentic workflows", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/cloud-sql-mysql" },
    { title: "cloud-sql-mysql", description: "Connect and interact with a Cloud SQL for MySQL database", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/GitLab-Ecosystem/Gemini-CLI-Extensions" },
    { title: "gitlab", description: "Connects Gemini CLI to the hosted GitLab MCP server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/ddobrin/gemini-plan-commands" },
    { title: "gemini-plan-commands", description: "Gemini CLI commands to create, refine, implement and deploy a plan", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/chronosphereio/chronosphere-mcp" },
    { title: "chronosphere-mcp", description: "MCP server for chronosphere", category: "Gemini CLI", updated: "4w", external: true },
    { title: "agent-creator", description: "AI-powered extension for Gemini CLI that creates custom agents.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jduncan-rva/gemini-agent-creator" },
    { title: "skillz", description: "Load Claude-style skills into Gemini CLI using the Skillz MCP server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/intellectronica/gemini-cli-skillz" },
    { title: "gemini-cli-gopls", description: "Integrates the official MCP of the Go language server (gopls) with Gemini CLI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/Menghuan1918/gemini-cli-gopls" },
    { title: "wix", description: "Enable Gemini CLI to search the Wix documentation and make API calls.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/wix/wix-mcp" },
    { title: "mcp-game-asset-gen", description: "Asset generation MCP server for Three.js and game engines", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/Flux159/mcp-game-asset-gen" },
    { title: "extension-browser", description: "Gemini CLI extension to browse and recommend other extensions.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/swissspidy/extension-browser" },
    { title: "dev-flow", description: "Structured development workflow to help you with systematic feature development.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/shrwnsan/clix-dev-flow" },
    { title: "cloud-sql-sqlserver", description: "Connect to Cloud SQL for SQL Server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/cloud-sql-sqlserver" },
    { title: "dataplex", description: "Connect to Dataplex Universal Catalog to discover data.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/dataplex" },
    { title: "cloud-sql-pg-obs", description: "Manage and monitor database performance for Cloud SQL for PostgreSQL.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/cloud-sql-postgresql-observability" },
    { title: "alloydb-observability", description: "Manage and monitor database performance for AlloyDB.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/alloydb-observability" },
    { title: "choicely-app-assistant", description: "A Gemini CLI extension for building Choicely native mobile applications.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/choicely/choicely-gemini-cli-extension" },
    { title: "gas-fakes-ext", description: "Gemini CLI Extension for Sandboxed Google Apps Script.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/mhawksey/gas-fakes-ext" },
    { title: "notion", description: "Notion integration via MCP (search/read/write pages).", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gitremko/Gemini_cli_notion_extention" },
    { title: "github-issue", description: "GitHub Issues AI Agent", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/enola-dev/github-issue-agent" },
    { title: "system-agents", description: "A collection of curated system prompt variants for the Gemini CLI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jduncan-rva/gemini-system-agents" },
    { title: "archon", description: "An Archon extension for the Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/cwest/archon-gemini-cli-extension" },
    { title: "cloud-sql-mysql-obs", description: "Manage and monitor database performance for Cloud SQL for MySQL.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/cloud-sql-mysql-observability" },
    { title: "cloud-sql-sqlserver-obs", description: "Manage and monitor database performance for Cloud SQL for SQL Server.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/cloud-sql-sqlserver-observability" },
    { title: "looker-conversational", description: "Connect to Looker Conversational Analytics", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/gemini-cli-extensions/looker-conversational-analytics" },
    { title: "gemini-mentor", description: "A mentoring extension that transforms Gemini into a supportive coach.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/JayadityaGit/gemini-mentor" },
    { title: "git-tools", description: "Enhance your Git workflow with AI-generated commit messages.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/paufortiana/geminicli-git-tools-extension" },
    { title: "plan", description: "Gemini CLI Extension with Custom Commands for plan, refine, implement.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jjdelorme/plan-commands" },
    { title: "blender-mcp", description: "A super simple extension to enable Blender via MCP for Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/xprilion/gemini-cli-blender-extension" },
    { title: "sumcontext", description: "Extension Gemini CLI – Génération d'un sommaire structuré de la conversation.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/wenrolland/sumcontext_Gemini_CLI_Extension" },
    { title: "dev-gas-extension", description: "Supercharge your Google Apps Script (GAS) development.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/tanaikech/dev-gas-extension" },
    { title: "gas-development-kit", description: "Enhances Google Apps Script development by integrating with tools like clasp.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/tanaikech/gas-development-kit-extension" },
    { title: "file-search-store", description: "Integrates File Search feature for RAG directly in your command line.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/tanaikech/FileSearchStore-extension" },
    { title: "gerrit", description: "Gerrit MCP Server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/GerritCodeReview/gerrit-mcp-server" },
    { title: "scribe", description: "Facilitates a professional, multi-stage documentation pipeline.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/sapientcoffee/scribe" },
    { title: "mongodb", description: "Gemini CLI extension for MongoDB", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/mongodb-partners/mongodb-gemini-extension" },
    { title: "vikunja", description: "Vikunja MCP server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/idjohnson/vikunjamcp" },
    { title: "arize-tracing", description: "Instrument your AI application with Arize AX.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/Arize-ai/arize-tracing-assistant" },
    { title: "resxmcp", description: "Lightweight MCP server for managing .resx localization files.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/miaofalianhua/ResxMcp" },
    { title: "typst-expert", description: "Typst Expert for Gemini-CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/kongdd/expert-typst" },
    { title: "aoc-utils", description: "Utilities for Advent of Code (AoC)", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/derailed-dash/aoc-utils-mcp" },
    { title: "anomalo", description: "The Anomalo extension for Google Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/datagravity-ai/anomalo-gemini-extension" },
    { title: "gemini-cli-babashka", description: "Gemini Cli extension for babashka (clojure).", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/davidpham87/gemini-cli-babashka" },
    { title: "render-com-mcp", description: "Render.com MCP Server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/involvex/gemini-extension-render-com-mcp" },
    { title: "my-code-analyzer", description: "Analyze your code.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jmpark333/my-code-analyzer" },
    { title: "transmit-security", description: "Create Identity Orchestration (IDO) Journeys for Transmit Security.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/TransmitSecurity/transmit-security-journey-builder" },
    { title: "telegram", description: "Telegram extension for Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/VSKurkin/gemini-cli-telegram-extension" },
    { title: "ssh", description: "Run remote SSH commands and transfer files.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/involvex/gemini-cli-ssh-extension" },
    { title: "agent-kit", description: "Enterprise-grade MCP server integrations for Gemini CLI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/blogic-cz/agent-kit-gemini" },
    { title: "blog-publisher", description: "Drafting and publishing blog posts for your personal blog.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jduncan-rva/blog-assistant" },
    { title: "articleprocessor", description: "Gemini cli extension for article processor", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/yuanchenxi95/articleprocessor" },
    { title: "async-remote-agent", description: "Gemini CLI extension for managing remote agent sandboxes on GKE", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/derrickchwong/remote-agent-extension" },
    { title: "gemini-cli-wakatime", description: "Track your AI-assisted coding activity.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/EstebanForge/gemini-cli-wakatime" },
    { title: "gemini-context-ext", description: "Context window tracker and cost estimator for Gemini CLI", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/Beaulewis1977/gemini-context-extension" },
    { title: "wordlift-gemini-ext", description: "Manage WordLift Knowledge Graphs directly from Gemini CLI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/wordlift/wordlift-gemini-cli-extension" },
    { title: "liku", description: "LikuBuddy: Multi-agent terminal orchestration and live streaming platform", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/TayDa64/LikuBuddy" },
    { title: "expert-proposal", description: "Research Proposal Writing Assistant", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/kongdd/expert-proposal" },
    { title: "visa-commerce", description: "Remote MCP server for Visa", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/visa/mcp" },
    { title: "prprompts-flutter", description: "AI-powered Flutter development with full automation.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/Kandil7/prprompts-flutter-generator" },
    { title: "gemini-logos", description: "Tools for generating custom branding and logos for the Gemini CLI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jduncan-rva/gemini-logos" },
    { title: "gemini-history", description: "Extension to analyze and export Gemini session history.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jduncan-rva/gemini-history-learning" },
    { title: "workspace-inbox", description: "Tools for managing your Google Workspace Inbox", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jduncan-rva/google-workspace-inbox" },
    { title: "gitops", description: "GitOps Extension", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/mikebz/gitops-extension" },
    { title: "daily-grind", description: "A demo Gemini CLI extension that also bundles some MCP magic", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/sapientcoffee/daily-grind-extension" },
    { title: "sharepoint-audit", description: "Run a SharePoint permission audit.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/Aqualia/Skills-Library" },
    { title: "post-bridge", description: "An unofficial post-bridge.com MCP server", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/xSAVIKx/post-bridge-mcp" },
    { title: "master-artilect", description: "Expert engineering persona with access to the 'Master Artilect' reference library.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/ToxicFartCloud/gemini-cli-artilect" },
    { title: "piata-ai-flow", description: "Custom integrations for Piata AI project, inspired by Gemini Flow", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/valentinuuiuiu/piata-ai-new" },
    { title: "gemini-witty", description: "Automate the creation and management of witty sayings.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/jduncan-rva/gemini-witty-sayings" },
    { title: "writer-persona", description: "Writing assistant persona for Gemini CLI.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/prefrontalsys/gemini-writer-extension" },
    { title: "performance", description: "A Gemini CLI extension to analyze web page performance", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/mcclatchy/mcp-performance" },
    { title: "shell-aliases", description: "Expose shell aliases as safe MCP tools via FastMCP.", category: "Gemini CLI", updated: "4w", external: true, link: "https://github.com/hestonhamilton/mcp-shell-aliases" },
];

export default function GeminiCliPage() {
    return (
        <div className="pt-32 pb-16 min-h-screen bg-deep-charcoal">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Back Button */}
                <Link
                    href="/toolkit"
                    className="inline-flex items-center text-gray-400 hover:text-neon-green mb-8 transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="mr-2">
                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Toolkit
                </Link>

                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Gemini CLI Extensions
                </h1>
                <p className="text-xl text-gray-400 mb-12 max-w-3xl">
                    A comprehensive library of extensions and MCP servers to supercharge your Gemini CLI workflow.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {EXTENSIONS.map((ext, idx) => (
                        <motion.a
                            key={idx}
                            href={ext.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-cyber-card border border-gray-800 rounded-xl p-6 hover:border-neon-green/50 transition-all group hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                            </div>

                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                                    {ext.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors line-clamp-2">
                                {ext.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                {ext.description}
                            </p>

                            <div className="flex justify-between items-center text-xs text-gray-600 mt-auto pt-4 border-t border-gray-800">
                                <span>Updated {ext.updated} ago</span>
                                {ext.external && (
                                    <>
                                        <span className="mx-2">•</span>
                                        <span>External</span>
                                    </>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
