import { MCPServer } from '@anthropic-ai/mcp-core';
import dotenv from 'dotenv';
import { riskResources } from './resources/risks';
import { createRiskTools } from './tools/risk-tools';
import { ISOPlannerClient } from './services/isoplanner-client';

dotenv.config();

// Initialize ISOPlanner client
const client = new ISOPlannerClient({
  apiUrl: process.env.ISOPLANNER_API_URL!,
  clientId: process.env.ISOPLANNER_CLIENT_ID!,
  clientSecret: process.env.ISOPLANNER_CLIENT_SECRET!
});

// Create MCP server
const server = new MCPServer({
  name: 'isoplanner-mcp',
  version: '0.1.0',
  description: 'MCP server for ISOPlanner API integration'
});

// Register resources and tools
async function main() {
  try {
    // Register resources
    for (const resource of riskResources) {
      server.addResource(resource);
    }

    // Register tools
    const riskTools = createRiskTools(client);
    for (const tool of riskTools) {
      server.addTool(tool);
    }

    // Start server
    await server.start();
    console.log('MCP Server started successfully');
  } catch (error) {
    console.error('Failed to start MCP Server:', error);
    process.exit(1);
  }
}

main();