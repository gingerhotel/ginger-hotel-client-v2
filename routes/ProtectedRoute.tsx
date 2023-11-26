export const ProtectedRoute = () => {
    if (isLogin) {
        return;
    } else {
        router.push("/login")
    }
}