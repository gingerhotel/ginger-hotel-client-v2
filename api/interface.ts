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
    bodyColot: string; // 오타 수정: bodyColor로 변경
}
export interface UserApiResponse {
    success: boolean;
    user: User;
    hotel: Hotel;
}