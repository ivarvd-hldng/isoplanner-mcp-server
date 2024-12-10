import { ResourceConfig } from '@anthropic-ai/mcp-core';

export const riskResources: ResourceConfig[] = [
  {
    name: 'risks',
    description: 'ISOPlanner risks and their properties',
    schema: {
      type: 'object',
      properties: {
        riskId: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
        status: { type: 'string' },
        tags: { 
          type: 'array',
          items: {
            type: 'object',
            properties: {
              tagId: { type: 'integer' },
              tagName: { type: 'string' },
              tagValue: { type: 'string' }
            }
          }
        },
        controls: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              controlId: { type: 'integer' },
              controlName: { type: 'string' }
            }
          }
        }
      }
    }
  },
  {
    name: 'risk_tags',
    description: 'Tags associated with risks',
    schema: {
      type: 'object',
      properties: {
        riskId: { type: 'integer' },
        tags: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              tagId: { type: 'integer' },
              tagName: { type: 'string' },
              tagValue: { type: 'string' }
            }
          }
        }
      }
    }
  }
];