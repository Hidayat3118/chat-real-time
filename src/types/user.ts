export interface UserDoc {
  displayName: string;
  userName: string;
  email: string;
  month: string;
  day: string;
  year: string;
  createdAt: Date;
  isOnline: boolean;
  photoURL?: string;
}
