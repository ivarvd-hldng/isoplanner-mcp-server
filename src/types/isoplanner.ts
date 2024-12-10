// ISOPlanner API Types
export interface ISOPlannerConfig {
  apiUrl: string;
  clientId: string;
  clientSecret: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}