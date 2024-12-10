import axios from 'axios';
import { ISOPlannerConfig, AuthToken } from '../types/isoplanner';

export class ISOPlannerClient {
  private config: ISOPlannerConfig;
  private token: AuthToken | null = null;
  public axios: any;

  constructor(config: ISOPlannerConfig) {
    this.config = config;
    this.axios = axios.create({
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Add request interceptor for adding the auth token
    this.axios.interceptors.request.use(async (config: any) => {
      const token = await this.getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token.access_token}`;
      }
      return config;
    });
  }

  private async getAccessToken(): Promise<AuthToken> {
    if (this.token && this.isTokenValid()) {
      return this.token;
    }

    try {
      const response = await axios.post(this.config.tokenUrl, {
        grant_type: 'client_credentials',
        client_id: this.config.clientId,
        scope: 'access_as_user',
        resource: this.config.resource
      });

      this.token = response.data;
      return this.token;
    } catch (error) {
      console.error('Failed to get access token:', error);
      throw error;
    }
  }

  private isTokenValid(): boolean {
    if (!this.token) return false;
    // Add some buffer time (5 minutes) before token expiration
    const bufferTime = 5 * 60 * 1000;
    const expirationTime = (this.token.expires_in * 1000) - bufferTime;
    return expirationTime > Date.now();
  }

  // Risk Management methods remain the same
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