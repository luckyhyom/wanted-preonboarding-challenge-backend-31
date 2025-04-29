export interface UserProps {
  id: bigint;
  name: string;
  email: string;
  avatarUrl?: string | null;
  createdAt?: Date;
}
