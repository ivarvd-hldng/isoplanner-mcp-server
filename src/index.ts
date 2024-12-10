import { MCPServer } from '@anthropic-ai/mcp-core';
import dotenv from 'dotenv';

dotenv.config();

const server = new MCPServer({
  name: 'isoplanner-mcp',
  version: '0.1.0',
  description: 'MCP server for ISOPlanner API integration'
});

async function main() {
  try {
    await server.start();
    console.log('MCP Server started successfully');
  } catch (error) {
    console.error('Failed to start MCP Server:', error);
    process.exit(1);
  }
}

main();