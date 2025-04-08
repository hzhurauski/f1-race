export interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
}
