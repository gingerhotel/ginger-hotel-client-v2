export interface User {
  nickname: string;
  code: string;
  membership: string;
  gender: "MAN" | "WOMAN" | null;
  birthDate: string | null;
  keyCount: number;
  feekCount: number;
}

export interface Hotel {
  id: number;
  nickname: string;
  description: string;
  structColor: string;
  bodyColor: string;
}

export interface UserApiResponse {
  success: boolean;
  user: User;
  hotel: Hotel;
}
