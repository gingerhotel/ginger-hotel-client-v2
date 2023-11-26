import create from 'zustand'

interface Auth {
    accessToken: string;
    setAccessToken: (accessToken: string) => void;
    isLogin: boolean;
    setisLogin: (isLogin: boolean) => void;
}


const authStore = create<Auth>((set) => ({
    accessToken: "none",
    setAccessToken: (accessToken) => {
      set((state) => ({ accessToken: accessToken }));
    },
    
    isLogin: false,
    setisLogin: (isLogin) => {
      set((state) => ({ isLogin: isLogin }));
    },

    /*
      setId: (by) => {
      set((state) => ({ id: by }));
    }, // 이게 더 보기 편할 수 있음
    */
}));

export default authStore;