export interface Result {
  number: string;
  position: string;
}

export interface DriverResult {
  season: string;
  round: string;
  raceName: string;
  Results: Result[];
}

export interface DriverResultState {
  results: DriverResult[];
  loading: boolean;
  error: string | null;
  page: number;
}
