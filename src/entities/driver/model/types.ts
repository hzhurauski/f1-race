export interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  url: string;
}

export interface DriversResponse {
  drivers: Driver[];
  total: number;
  limit: number;
  offset: number;
}

export interface DriverState {
  data: Driver[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}
