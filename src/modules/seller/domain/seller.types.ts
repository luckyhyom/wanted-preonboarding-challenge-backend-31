export interface SellerProps {
  id: bigint;
  name: string;
  description?: string | null;
  logoUrl?: string | null;
  rating?: number | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  createdAt?: Date;
}
