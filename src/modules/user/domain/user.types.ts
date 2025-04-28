export interface UserProps {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string | null;
  createdAt?: Date;
}
