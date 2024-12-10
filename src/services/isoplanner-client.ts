import axios from 'axios';
import { ISOPlannerConfig } from '../types/isoplanner';

export class ISOPlannerClient {
  private config: ISOPlannerConfig;
  private axios: any;

  constructor(config: ISOPlannerConfig) {
    this.config = config;
    this.axios = axios.create({
      baseURL: config.apiUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Asset Management
  async getAssets() {
    const response = await this.axios.get('/bi/v1/assets');
    return response.data;
  }

  async getAssetTags() {
    const response = await this.axios.get('/bi/v1/assets/tags');
    return response.data;
  }

  async getAssetRisks() {
    const response = await this.axios.get('/bi/v1/assets/risks');
    return response.data;
  }

  // Task Management
  async getTasks() {
    const response = await this.axios.get('/bi/v1/tasks');
    return response.data;
  }

  async getTaskTags() {
    const response = await this.axios.get('/bi/v1/tasks/tags');
    return response.data;
  }

  // Risk Management
  async getRisks() {
    const response = await this.axios.get('/bi/v1/risks');
    return response.data;
  }

  async getRiskTags() {
    const response = await this.axios.get('/bi/v1/risks/tags');
    return response.data;
  }
}