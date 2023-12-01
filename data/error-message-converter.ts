
/**
 * ['errorTitle', 'errorMessage'] 를 반홚합니다. index 접근으로 사용
 */
export class ErrorMessageConverter {
    public static convert(errorCode: Error): any {
        return ErrorCode[errorCode];
    }
}

const ErrorCode = {
  // Common Error
  "1001": [
    "요청한 정보에 접근할 수 없어요.",
    "올바른 경로인지 확인해보세요 :)",
  ],
  "1002": [
    "인증되지 않은 사용자예요.",
    "로그인되어 있는 상태인지 확인해보세요 :)",
  ],
  "1003": ["요청한 정보를 찾을 수 없어요,", "올바른 요청인지 확인해보세요 :)"],
  "1004": [
    "예상치 못한 오류가 발생했어요.",
    "이미 등록된 디바이스 정보입니다 :(",
  ],
  "1005": [
    "예상치 못한 오류가 발생했어요.",
    "서버에 에러가 발생했습니다. 불편을 드려 죄송합니다 :(",
  ],
  "1006": [
    "내가 나에게 요청할 수는 없어요.",
    "자신이 아닌 친구들에게 요청해보세요 :)",
  ],
  "1007": [
    "올바르지 않는 값을 입력했어요.",
    "다시 한번 확인 후 입력해주세요 :)",
  ],
  // Hotel Error
  "2001": ["아직 창문이 닫혀있어요.", "편지를 받아 창문을 열어보세요 :)"],
  "2002": [
    "이미 창문이 열려있어요.",
    "창문이 열려있으니 이제 편지를 읽어보세요 :)",
  ],
  "2003": [
    "받은 편지가 없어요.",
    "받은 편지가 존재하지 않아요. 친구들에게 편지를 요청해보세요 :)",
  ],
  "2004": ["내 창문만 열 수 있어요.", "내 호텔로 가서 내 창문을 열어보세요 :)"],
  "2005": ["열쇠가 부족해요.", "친구를 진저호텔에 초대해 열쇠를 모아보세요 :)"],
  "2006": [
    "오늘 편지 제한을 이미 해제했어요.",
    "내일도 편지 제한을 해제해보세요 :)",
  ],
  "2007": ["성별은 최초 한 번만 수정이 가능해요.", "불편을 드려 죄송합니다 :("],
  "2008": [
    "생년월일은 최초 한 번만 수정이 가능해요.",
    "불편을 드려 죄송합니다 :(",
  ],
  "2009": ["이미 내 호텔이 존재합니다.", "이미 호텔을 가지고 있어요 :)"],
  "2010": ["잘못된 친구 코드예요.", "친구의 코드를 다시 한번 확인해보세요 :)"],
  "2011": ["편지를 보낼 수 없어요.", "상대방이 나를 차단했어요"],
  // Letter Error
  "3001": [
    "친구의 호텔 편지함이 꽉 찼어요!",
    "상대방의 호텔 편지함이 꽉 차서 오늘은 더 이상 편지를 보낼 수 없어요. 내일 다시 찾아주세요 :)",
  ],
  "3002": [
    "차단한 편지가 아니에요.",
    "차단되지 않은 편지는 해제할 수 없어요 :(",
  ],
  "3003": [
    "이미 차단된 편지예요.",
    "이미 차단한 편지를 또 차단할 수 없어요 :(",
  ],
  "3004": [
    "잘못된 이미지 파일이에요.",
    "이미지는 jpg, jpeg, png 파일만 올릴 수 있어요 :(",
  ],
  "3005": [
    "이미지 용량이 너무 커요.",
    "이미지는 최대 3MB까지만 올릴 수 있어요 :(",
  ],
  "3006": [
    "이미지 업로드 기능을 사용할 수 없어요.",
    "불편을 드려 죄송합니다 :(",
  ],
  "3007": ["답장 기능을 사용할 수 없어요.", "불편을 드려 죄송합니다 :("],
  // Village Error
  "4001": [
    "내 빌리지에 있는 친구가 아니에요.",
    "내 빌리지에 있지 않아서 빌리지 삭제를 할 수 없어요 :(",
  ],
  "4002": [
    "이미 내 빌리지에 있는 친구예요.",
    "이미 내 빌리지에 있어서 또 추가할 수 없어요 :(",
  ],
  "4003": [
    "내 빌리지가 가득찼어요.",
    "내 빌리지에는 10명까지만 추가할 수 있어요 :)"
  ],
  // Feek Error
  "5001": ["엿보기 개수가 부족해요.", "엿보기 개수를 채워보세요 :)"],
  "5002": [
    "이미 엿보기를 신청한 편지예요.",
    "편지 하나 당 한번의 엿보기만 신청이 가능해요 :)",
  ],
};


type Error = CommonError | HotelError | LetterError | VillageError | FeekError;
type CommonError = '1001' | '1002' | '1003' | '1004' | '1005' | '1006' | '1007';
type HotelError = '2001' | '2002' | '2003' | '2004' | '2005' | '2006' | '2007' | '2008' | '2009' | '2010' | '2011';
type LetterError = '3001' | '3002' | '3003' | '3004' | '3005' | '3006' | '3007';
type VillageError = '4001' | '4002';
type FeekError = '5001' | '5002';
