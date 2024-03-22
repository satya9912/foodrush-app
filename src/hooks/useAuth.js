import { useState, useEffect } from "react";
const useAuth = () => {
    const [isOnline, setIsOnline] = useState(true);

    function setOnline(){
        setIsOnline(true);
    }

    function setOffline(){
        setIsOnline(false);
    }

    useEffect(() => {
        const handleOnline = window.addEventListener('online', setOnline);
        const handleOffline = window.addEventListener('offline', setOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, []);
    return isOnline;
};

export default useAuth;