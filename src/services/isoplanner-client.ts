import axios from 'axios';
import { ISOPlannerConfig } from '../types/isoplanner';

export class ISOPlannerClient {
  private config: ISOPlannerConfig;
  public axios: any;

  constructor(config: ISOPlannerConfig) {
    this.config = config;
    this.axios = axios.create({
      baseURL: config.apiUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    });
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

  async getRiskControls() {
    const response = await this.axios.get('/bi/v1/risks/controls');
    return response.data;
  }

  async getRiskObjectives() {
    const response = await this.axios.get('/bi/v1/risks/objectives');
    return response.data;
  }

  async getRiskProcesses() {
    const response = await this.axios.get('/bi/v1/risks/processes');
    return response.data;
  }
}