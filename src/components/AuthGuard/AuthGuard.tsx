import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface AuthGuardProps {
    authFor?: 'teacher' | 'employer';
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children, authFor }) => {
    const [isValid, setIsValid] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // user obj get sets when login
        const user = localStorage.getItem('user');

        // If there is no user we redirect to "/login" page.
        if (!user) {
            router.replace('/login');
            return;
        } else if (authFor) {
            let obj: LocalStorageDecoded = JSON.parse(user);
            if (obj.type !== authFor) {
                router.replace('/login');
                return;
            }
        }
        setIsValid(true);
    }, [authFor, router]);

    // if auth initialized with a valid user show protected page
    if (isValid) {
        return <>{children}</>;
    }

    /* otherwise don't return anything, will do a redirect from useEffect */
    return null;
};
