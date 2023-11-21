export interface TodayLetterProps {
    hotelId: number,
    date: string
}
export interface TodayLetters {
    id: number,
    createdAt: string,
    senderNickname: string,
    content: string,
    isBlocked: boolean,
    imageUrl: string,
    feekStatus: string,
    feekComment: null | string
}

export interface NewHotel {
  structColor: string;
  bodyColor: string;
  nickname: string;
  description: string;
  gender: "MAN | WOMAN";
  birthDate: string;
  code: string;
}

