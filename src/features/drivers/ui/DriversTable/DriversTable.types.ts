import { Driver } from 'entities/driver/model/types.ts';

export type Props = {
  data: Driver[];
  onSelect: (id: string) => void;
  onViewResults: (driverId: string) => void;
};
