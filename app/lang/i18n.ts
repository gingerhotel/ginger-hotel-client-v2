import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resource = {
    en: {
        translation: {
            // 마이페이지
            "My Membership": "My Membership",
            "My Code": "My Code",
            "My Key": "My Key",
            "My Peek": "My Peek",
            "HotelModify": "Modifying My Hotel",
            "Membership": "Membership",
            "Terms of Use": "Terms of Use",
            "Privacy Policy": "Privacy Policy",
            "CS Center": "CS Center",
            "Team Ginger": "Team Ginger",
            "gingerhotel_welcome": "gingerhotel_welcome",
            "Busniess": "Business Registration Number: 202-58-00723 CEO: Minji Kang",
            "Address": "Address: 16, Seodaemun-ro 7-gil, Jung-gu, Seoul, Room 508-3",
            "Email": "Email: teamgingerkr@gmail.com",
        }
    },
    ko: {
        translation: {
            // 마이페이지
            "My Membership": "내 멤버쉽",
            "My Code": "내 코드",
            "My Key": "내 열쇠",
            "My Peek": "내 엿보기",
            "HotelModify": "호텔수정",
            "Membership": "멤버쉽",
            "Terms of Use": "이용약관",
            "Privacy Policy": "개인정보 처리방침",
            "CS Center": "고객센터",
            "Team Ginger": "팀진저",
            "gingerhotel_welcome": "진저호텔",
            "Busniess": "사업자등록번호 : 202-58-00723 대표이사 강민지",
            "Address": "주소 : 서울특별시 중구 서대문로7길 16 508-3호",
            "Email": "이메일 : teamgingerkr@gmail.com",
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources:resource,
        // 초기 설정 언어
        lng: "ko",
        fallbackLng: "ko",
        debug: true,
        defaultNS: "translations",
        ns: "translations",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;