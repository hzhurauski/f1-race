export interface DriverResult {
  season: string;
  round: string;
  raceName: string;
  number: string;
  position: string;
}

export interface DriverResultState {
  results: DriverResult[];
  loading: boolean;
  error: string | null;
  page: number;
}
