import { ToolConfig } from '@anthropic-ai/mcp-core';
import { ISOPlannerClient } from '../services/isoplanner-client';

export function createRiskTools(client: ISOPlannerClient): ToolConfig[] {
  return [
    {
      name: 'get_risks',
      description: 'Get a list of all risks',
      handler: async () => {
        return await client.getRisks();
      }
    },
    {
      name: 'get_risk_tags',
      description: 'Get all tags associated with risks',
      handler: async () => {
        return await client.getRiskTags();
      }
    },
    {
      name: 'get_risk_controls',
      description: 'Get all controls associated with risks',
      handler: async () => {
        const response = await client.axios.get('/bi/v1/risks/controls');
        return response.data;
      }
    },
    {
      name: 'get_risk_objectives',
      description: 'Get all objectives associated with risks',
      handler: async () => {
        const response = await client.axios.get('/bi/v1/risks/objectives');
        return response.data;
      }
    },
    {
      name: 'get_risk_processes',
      description: 'Get all processes associated with risks',
      handler: async () => {
        const response = await client.axios.get('/bi/v1/risks/processes');
        return response.data;
      }
    }
  ];
}