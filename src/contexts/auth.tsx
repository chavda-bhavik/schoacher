import { appRoutes } from "../static/constants";
import { supabase } from '@/api'

const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ router, children }) => {
    const users = supabase.auth.user();
    const isAuthenticated = users;
    const port = "http://localhost:3000";
    let unprotectedRoutes = [
        appRoutes.LOGIN_PAGE,
        appRoutes.FORGOT_PASSWORD,
        appRoutes.RESET_PASSWORD,
        appRoutes.REGISTER_SCHOOL,
        appRoutes.REGISTER_TEACHER,
        appRoutes.SIGNUP,
    ];

    let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

    if (isBrowser() && !isAuthenticated && pathIsProtected) {
        router.push(port + appRoutes.LOGIN_PAGE);
    }

    return children;
};

export default ProtectedRoute;