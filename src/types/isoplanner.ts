export interface ISOPlannerConfig {
  clientId: string;
  resource: string;
  authUrl: string;
  tokenUrl: string;
}

export interface AuthToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}