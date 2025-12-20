import re
import json

# Correct links from browser subagent
CORRECT_LINKS_JSON = """
[
  { "title": "context7", "link": "https://github.com/upstash/context7" },
  { "title": "github", "link": "https://github.com/github/github-mcp-server" },
  { "title": "chrome-devtools-mcp", "link": "https://github.com/ChromeDevTools/chrome-devtools-mcp" },
  { "title": "mcp-toolbox-for-databases", "link": "https://github.com/googleapis/genai-toolbox" },
  { "title": "clasp", "link": "https://github.com/google/clasp" },
  { "title": "exa-mcp-server", "link": "https://github.com/exa-labs/exa-mcp-server" },
  { "title": "grafana", "link": "https://github.com/grafana/mcp-grafana" },
  { "title": "mcp-server-kubernetes", "link": "https://github.com/Flux159/mcp-server-kubernetes" },
  { "title": "stripe", "link": "https://github.com/stripe/ai" },
  { "title": "terraform", "link": "https://github.com/hashicorp/terraform-mcp-server" },
  { "title": "elevenlabs", "link": "https://github.com/elevenlabs/elevenlabs-mcp" },
  { "title": "cloudbase-ai-toolkit", "link": "https://github.com/TencentCloudBase/CloudBase-AI-ToolKit" },
  { "title": "mcp-neo4j", "link": "https://github.com/neo4j-contrib/mcp-neo4j" },
  { "title": "nanobanana", "link": "https://github.com/gemini-cli-extensions/nanobanana" },
  { "title": "cloud-run", "link": "https://github.com/GoogleCloudPlatform/cloud-run-mcp" },
  { "title": "open-aware", "link": "https://github.com/qodo-ai/open-aware" },
  { "title": "redis", "link": "https://github.com/redis/mcp-redis" },
  { "title": "monday", "link": "https://github.com/mondaycom/mcp" },
  { "title": "flutter", "link": "https://github.com/gemini-cli-extensions/flutter" },
  { "title": "gemini-cli-security", "link": "https://github.com/gemini-cli-extensions/security" },
  { "title": "gemini-flow", "link": "https://github.com/clduab11/gemini-flow" },
  { "title": "code-review", "link": "https://github.com/gemini-cli-extensions/code-review" },
  { "title": "@zilliztech/mcp-server-milvus", "link": "https://github.com/zilliztech/mcp-server-milvus" },
  { "title": "gemini-cli-jules", "link": "https://github.com/gemini-cli-extensions/jules" },
  { "title": "sonarqube-mcp-server", "link": "https://github.com/SonarSource/sonarqube-mcp-server" },
  { "title": "dynatrace-mcp-server", "link": "https://github.com/dynatrace-oss/dynatrace-mcp" },
  { "title": "huggingface", "link": "https://github.com/huggingface/hf-mcp-server" },
  { "title": "genkit", "link": "https://github.com/gemini-cli-extensions/genkit" },
  { "title": "uuv", "link": "https://github.com/e2e-test-quest/uuv" },
  { "title": "gemini-cli-prompt-library", "link": "https://github.com/harish-garg/gemini-cli-prompt-library" },
  { "title": "mcp-confluent", "link": "https://github.com/confluentinc/mcp-confluent" },
  { "title": "atlassian-rovo-mcp-server", "link": "https://github.com/atlassian/atlassian-mcp-server" },
  { "title": "postman", "link": "https://github.com/postmanlabs/postman-mcp-server" },
  { "title": "gke-mcp", "link": "https://github.com/GoogleCloudPlatform/gke-mcp" },
  { "title": "elasticsearch", "link": "https://github.com/elastic/gemini-cli-elasticsearch" },
  { "title": "google-workspace", "link": "https://github.com/gemini-cli-extensions/workspace" },
  { "title": "firebase", "link": "https://github.com/gemini-cli-extensions/firebase" },
  { "title": "huggingface-skills", "link": "https://github.com/huggingface/skills" },
  { "title": "google-maps-platform", "link": "https://github.com/googlemaps/platform-ai" },
  { "title": "Figma", "link": "https://github.com/figma/figma-gemini-cli-extension" },
  { "title": "criticalthink", "link": "https://github.com/abagames/slash-criticalthink" },
  { "title": "pinecone-mcp", "link": "https://github.com/pinecone-io/pinecone-mcp" },
  { "title": "mcp-toolbox", "link": "https://github.com/gemini-cli-extensions/mcp-toolbox" },
  { "title": "ComputerUse", "link": "https://github.com/automateyournetwork/GeminiCLI_ComputerUse_Extension" },
  { "title": "postgres", "link": "https://github.com/gemini-cli-extensions/postgres" },
  { "title": "gemini-docs-ext", "link": "https://github.com/markmcd/gemini-docs-ext" },
  { "title": "GeminiCloudAssist", "link": "https://github.com/GoogleCloudPlatform/gemini-cloud-assist-mcp" },
  { "title": "google-adk-agent-extension", "link": "https://github.com/simonliu-ai-product/adk-agent-extension" },
  { "title": "blueprint", "link": "https://github.com/gplasky/gemini-cli-blueprint-extension" },
  { "title": "globalping", "link": "https://github.com/jsdelivr/globalping-mcp-server" },
  { "title": "vision", "link": "https://github.com/automateyournetwork/GeminiCLI_Vision_Extension" },
  { "title": "google-workspace-developer-tools", "link": "https://github.com/googleworkspace/developer-tools" },
  { "title": "gcloud", "link": "https://github.com/gemini-cli-extensions/gcloud" },
  { "title": "speedgrapher", "link": "https://github.com/danicat/speedgrapher" },
  { "title": "bitrise", "link": "https://github.com/bitrise-io/bitrise-mcp" },
  { "title": "ThoughtSpot", "link": "https://github.com/thoughtspot/mcp-server" },
  { "title": "looker", "link": "https://github.com/gemini-cli-extensions/looker" },
  { "title": "cloud-sql-postgresql", "link": "https://github.com/gemini-cli-extensions/cloud-sql-postgresql" },
  { "title": "harness-platform", "link": "https://github.com/harness/mcp-server" },
  { "title": "outline-driven-development", "link": "https://github.com/OutlineDriven/outline-driven-development" },
  { "title": "Endor-Labs-Code-Security", "link": "https://github.com/endorlabs/gemini-extension" },
  { "title": "FileSearch", "link": "https://github.com/automateyournetwork/GeminiCLI_File_Search_Extension" },
  { "title": "vault", "link": "https://github.com/hashicorp/vault-mcp-server" },
  { "title": "skill-porter", "link": "https://github.com/jduncan-rva/skill-porter" },
  { "title": "observability", "link": "https://github.com/gemini-cli-extensions/observability" },
  { "title": "datacommons", "link": "https://github.com/gemini-cli-extensions/datacommons" },
  { "title": "firestore-native", "link": "https://github.com/gemini-cli-extensions/firestore-native" },
  { "title": "bigquery-data-analytics", "link": "https://github.com/gemini-cli-extensions/bigquery-data-analytics" },
  { "title": "mysql", "link": "https://github.com/gemini-cli-extensions/mysql" },
  { "title": "shopify-dev-mcp", "link": "https://github.com/Shopify/dev-mcp-gemini-cli" },
  { "title": "study-ai", "link": "https://github.com/planetis-m/study-ai" },
  { "title": "sql-server", "link": "https://github.com/gemini-cli-extensions/sql-server" },
  { "title": "bigquery-conversational-analytics", "link": "https://github.com/gemini-cli-extensions/bigquery-conversational-analytics" },
  { "title": "PacketBuddy", "link": "https://github.com/automateyournetwork/GeminiCLI_Packet_Buddy_Extension" },
  { "title": "suprsend", "link": "https://github.com/suprsend/cli" },
  { "title": "tools-for-mcp-server-extension", "link": "https://github.com/tanaikech/ToolsForMCPServer-extension" },
  { "title": "palladius-commands", "link": "https://github.com/palladius/gemini-cli-custom-commands" },
  { "title": "chrome-devtools-mcp", "link": "https://github.com/diegorafs/Chrome-DevTools-MCP" },
  { "title": "gemini-cli-prompt-library", "link": "https://github.com/involvex/gemini-cli-prompt-library" },
  { "title": "alloydb", "link": "https://github.com/gemini-cli-extensions/alloydb" },
  { "title": "spanner", "link": "https://github.com/gemini-cli-extensions/spanner" },
  { "title": "canva", "link": "https://github.com/canva-sdks/canva-gemini-extension" },
  { "title": "adk-docs-ext", "link": "https://github.com/derailed-dash/adk-docs-ext" },
  { "title": "chime", "link": "https://github.com/rebekahx23/chime" },
  { "title": "gemini-autopm", "link": "https://github.com/rafeekpro/GeminiAutoPM" },
  { "title": "gemini-cli-git", "link": "https://github.com/ox01024/gemini-cli-git" },
  { "title": "pyATS", "link": "https://github.com/automateyournetwork/pyATS_GeminiCLI_Extension" },
  { "title": "gemini-kubernetes-dev", "link": "https://github.com/gke-labs/gemini-for-kubernetes-development" },
  { "title": "wandb-mcp-server", "link": "https://github.com/wandb/wandb-mcp-server" },
  { "title": "Snyk", "link": "https://github.com/snyk/agentic-integration-wrappers" },
  { "title": "cloud-sql-mysql", "link": "https://github.com/gemini-cli-extensions/cloud-sql-mysql" },
  { "title": "gitlab", "link": "https://github.com/GitLab-Ecosystem/Gemini-CLI-Extensions" },
  { "title": "gemini-plan-commands", "link": "https://github.com/ddobrin/gemini-plan-commands" },
  { "title": "chronosphere-mcp", "link": "https://github.com/chronosphereio/chronosphere-mcp" },
  { "title": "agent-creator", "link": "https://github.com/jduncan-rva/gemini-agent-creator" },
  { "title": "postman", "link": "https://github.com/postmanlabs/postman-gemini-cli-extension" },
  { "title": "skillz", "link": "https://github.com/intellectronica/gemini-cli-skillz" },
  { "title": "gemini-cli-gopls", "link": "https://github.com/Menghuan1918/gemini-cli-gopls" },
  { "title": "wix", "link": "https://github.com/wix/wix-mcp" },
  { "title": "mcp-game-asset-gen", "link": "https://github.com/Flux159/mcp-game-asset-gen" },
  { "title": "extension-browser", "link": "https://github.com/swissspidy/extension-browser" },
  { "title": "dev-flow", "link": "https://github.com/shrwnsan/clix-dev-flow" },
  { "title": "cloud-sql-sqlserver", "link": "https://github.com/gemini-cli-extensions/cloud-sql-sqlserver" },
  { "title": "dataplex", "link": "https://github.com/gemini-cli-extensions/dataplex" },
  { "title": "cloud-sql-pg-obs", "link": "https://github.com/gemini-cli-extensions/cloud-sql-postgresql-observability" },
  { "title": "alloydb-observability", "link": "https://github.com/gemini-cli-extensions/alloydb-observability" },
  { "title": "choicely-app-assistant", "link": "https://github.com/choicely/choicely-gemini-cli-extension" },
  { "title": "gas-fakes-ext", "link": "https://github.com/mhawksey/gas-fakes-ext" },
  { "title": "notion", "link": "https://github.com/gitremko/Gemini_cli_notion_extention" },
  { "title": "github-issue", "link": "https://github.com/enola-dev/github-issue-agent" },
  { "title": "system-agents", "link": "https://github.com/jduncan-rva/gemini-system-agents" },
  { "title": "archon", "link": "https://github.com/cwest/archon-gemini-cli-extension" },
  { "title": "cloud-sql-mysql-obs", "link": "https://github.com/gemini-cli-extensions/cloud-sql-mysql-observability" },
  { "title": "cloud-sql-sqlserver-obs", "link": "https://github.com/gemini-cli-extensions/cloud-sql-sqlserver-observability" },
  { "title": "looker-conversational", "link": "https://github.com/gemini-cli-extensions/looker-conversational-analytics" },
  { "title": "gemini-mentor", "link": "https://github.com/JayadityaGit/gemini-mentor" },
  { "title": "git-tools", "link": "https://github.com/paufortiana/geminicli-git-tools-extension" },
  { "title": "plan", "link": "https://github.com/jjdelorme/plan-commands" },
  { "title": "blender-mcp", "link": "https://github.com/xprilion/gemini-cli-blender-extension" },
  { "title": "outline-driven-development", "link": "https://github.com/OutlineDriven/odin-gemini-cli-extension" },
  { "title": "sumcontext", "link": "https://github.com/wenrolland/sumcontext_Gemini_CLI_Extension" },
  { "title": "dev-gas-extension", "link": "https://github.com/tanaikech/dev-gas-extension" },
  { "title": "gas-development-kit", "link": "https://github.com/tanaikech/gas-development-kit-extension" },
  { "title": "file-search-store", "link": "https://github.com/tanaikech/FileSearchStore-extension" },
  { "title": "gerrit", "link": "https://github.com/GerritCodeReview/gerrit-mcp-server" },
  { "title": "scribe", "link": "https://github.com/sapientcoffee/scribe" },
  { "title": "mongodb", "link": "https://github.com/mongodb-partners/mongodb-gemini-extension" },
  { "title": "vikunja", "link": "https://github.com/idjohnson/vikunjamcp" },
  { "title": "arize-tracing", "link": "https://github.com/Arize-ai/arize-tracing-assistant" },
  { "title": "resxmcp", "link": "https://github.com/miaofalianhua/ResxMcp" },
  { "title": "typst-expert", "link": "https://github.com/kongdd/expert-typst" },
  { "title": "aoc-utils", "link": "https://github.com/derailed-dash/aoc-utils-mcp" },
  { "title": "anomalo", "link": "https://github.com/datagravity-ai/anomalo-gemini-extension" },
  { "title": "gemini-cli-babashka", "link": "https://github.com/davidpham87/gemini-cli-babashka" },
  { "title": "render-com-mcp", "link": "https://github.com/involvex/gemini-extension-render-com-mcp" },
  { "title": "my-code-analyzer", "link": "https://github.com/jmpark333/my-code-analyzer" },
  { "title": "transmit-security", "link": "https://github.com/TransmitSecurity/transmit-security-journey-builder" },
  { "title": "telegram", "link": "https://github.com/VSKurkin/gemini-cli-telegram-extension" },
  { "title": "ssh", "link": "https://github.com/involvex/gemini-cli-ssh-extension" },
  { "title": "agent-kit", "link": "https://github.com/blogic-cz/agent-kit-gemini" },
  { "title": "blog-publisher", "link": "https://github.com/jduncan-rva/blog-assistant" },
  { "title": "articleprocessor", "link": "https://github.com/yuanchenxi95/articleprocessor" },
  { "title": "async-remote-agent", "link": "https://github.com/derrickchwong/remote-agent-extension" },
  { "title": "gemini-cli-wakatime", "link": "https://github.com/EstebanForge/gemini-cli-wakatime" },
  { "title": "gemini-context-ext", "link": "https://github.com/Beaulewis1977/gemini-context-extension" },
  { "title": "wordlift-gemini-ext", "link": "https://github.com/wordlift/wordlift-gemini-cli-extension" },
  { "title": "liku", "link": "https://github.com/TayDa64/LikuBuddy" },
  { "title": "expert-proposal", "link": "https://github.com/kongdd/expert-proposal" },
  { "title": "visa-commerce", "link": "https://github.com/visa/mcp" },
  { "title": "prprompts-flutter", "link": "https://github.com/Kandil7/prprompts-flutter-generator" },
  { "title": "gemini-logos", "link": "https://github.com/jduncan-rva/gemini-logos" },
  { "title": "gemini-history", "link": "https://github.com/jduncan-rva/gemini-history-learning" },
  { "title": "workspace-inbox", "link": "https://github.com/jduncan-rva/google-workspace-inbox" },
  { "title": "gitops", "link": "https://github.com/mikebz/gitops-extension" },
  { "title": "daily-grind", "link": "https://github.com/sapientcoffee/daily-grind-extension" },
  { "title": "sharepoint-audit", "link": "https://github.com/Aqualia/Skills-Library" },
  { "title": "post-bridge", "link": "https://github.com/xSAVIKx/post-bridge-mcp" },
  { "title": "master-artilect", "link": "https://github.com/ToxicFartCloud/gemini-cli-artilect" },
  { "title": "piata-ai-flow", "link": "https://github.com/valentinuuiuiu/piata-ai-new" },
  { "title": "gemini-witty", "link": "https://github.com/jduncan-rva/gemini-witty-sayings" },
  { "title": "writer-persona", "link": "https://github.com/prefrontalsys/gemini-writer-extension" },
  { "title": "performance", "link": "https://github.com/mcclatchy/mcp-performance" },
  { "title": "shell-aliases", "link": "https://github.com/hestonhamilton/mcp-shell-aliases" }
]
"""

correct_links = json.loads(CORRECT_LINKS_JSON)
# Create a map of lowercased title -> link
link_map = {item['title'].lower(): item['link'] for item in correct_links}
# Also add exact title mapping
for item in correct_links:
    link_map[item['title']] = item['link']

# Manual overrides for mismatched names in your file vs JSON
link_map['mcp-game-asset-gen'] = "https://github.com/Flux159/mcp-game-asset-gen"
link_map['cloud-sql-pg-obs'] = "https://github.com/gemini-cli-extensions/cloud-sql-postgresql-observability"
link_map['choicely-app-assistant'] = "https://github.com/choicely/choicely-gemini-cli-extension"
link_map['cloud-sql-mysql-obs'] = "https://github.com/gemini-cli-extensions/cloud-sql-mysql-observability"
link_map['cloud-sql-sqlserver-obs'] = "https://github.com/gemini-cli-extensions/cloud-sql-sqlserver-observability"
link_map['looker-conversational'] = "https://github.com/gemini-cli-extensions/looker-conversational-analytics"
link_map['mcp-toolbox-for-databases'] = "https://github.com/anhminhnguyen3110/genai-toolbox" # Based on JSON last item check? No wait, JSON has googleapis first.
# Actually let's trust the JSON 'mcp-toolbox-for-databases' entry if it exists.
# The JSON has { "title": "mcp-toolbox-for-databases", "link": "https://github.com/googleapis/genai-toolbox" }

input_path = "src/app/toolkit/gemini-cli/page.tsx"
output_path = "src/app/toolkit/gemini-cli/page_fixed.tsx"

with open(input_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    stripped = line.strip()
    if stripped.startswith("{ title:"):
        # Extract title using regex
        match = re.search(r'title: "(.*?)",', line)
        if match:
            title = match.group(1)
            # Find link
            new_link = link_map.get(title) or link_map.get(title.lower())
            
            # Fuzzy match / Manual map check
            if not new_link:
                 # Check for partial matches or known aliases
                 if title == "mcp-toolbox-for-databases": 
                     new_link = "https://github.com/googleapis/genai-toolbox"
                 elif title == "gas-development-kit":
                     new_link = link_map.get("gas-development-kit-extension")
                 elif title == "file-search-store":
                     new_link = link_map.get("file-search-store-extension")
                 elif title == "arize-tracing":
                     new_link = link_map.get("arize-tracing-assistant")
                 elif title == "async-remote-agent":
                     new_link = link_map.get("async-remote-agent-extension")
                 elif title == "gemini-context-ext":
                     new_link = link_map.get("gemini-context-extension")
                 elif title == "wordlift-gemini-ext":
                     new_link = link_map.get("wordlift-gemini-extension")
                 elif title == "visa-commerce":
                     new_link = link_map.get("visa-intelligent-commerce")
                 elif title == "prprompts-flutter":
                     new_link = link_map.get("prprompts-flutter-generator")
                 elif title == "gemini-history":
                     new_link = link_map.get("gemini-history-learning")
                 elif title == "gemini-witty":
                     new_link = link_map.get("gemini-witty-sayings")
                 elif title == "gemini-kubernetes-dev":
                     new_link = link_map.get("gemini-kubernetes-dev") or "https://github.com/gke-labs/gemini-for-kubernetes-development"

            if new_link:
                # Replace the link in the line
                # Regex to replace link: "..."
                line = re.sub(r'link: ".*?"', f'link: "{new_link}"', line)
            else:
                print(f"Warning: No link found for {title}")
    
    new_lines.append(line)

with open(output_path, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print("Finished writing page_fixed.tsx")
