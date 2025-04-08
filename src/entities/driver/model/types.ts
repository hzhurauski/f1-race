export interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  url: string;
}

export interface DriverState {
  data: Driver[];
  loading: boolean;
  error: string | null;
  page: number;
}
