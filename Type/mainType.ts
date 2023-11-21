export interface HotelWindowType {
  id: number;
  isOpen: boolean;
  hasCookie: boolean;
}

export interface HotelData {
  success: boolean;
  todayReceivedLetterCount: number;
  feekCount: number;
  keyCount: number;
  hotel: {
    nickname: string;
    description: string;
    structColor: string;
    bodyColor: string;
  };
  hotelWindows: Record<string, HotelWindowType>;
  isLoginMember: boolean;
  isOwner: boolean;
  isFriend: boolean;
  isBlocked: boolean;
}
