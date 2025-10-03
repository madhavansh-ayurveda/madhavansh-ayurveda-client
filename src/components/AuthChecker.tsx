import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/features/authSlice';
import { authApi } from '@/api/authApi';
import { toast } from 'react-hot-toast';
import { getErrorMessage } from '@/utils/apiErrorHandler';

const AuthChecker = ({ children }: { children: React.ReactNode }) => {
  const { user, token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      if (user && token) {
        try {
          await authApi.checkAuth();
        } catch (error) {
          dispatch(logout());
          toast.error("Your session has expired. Please log in again.");
          console.error("Auth check failed:", getErrorMessage(error));
        }
      }
    };

    verifyToken();
  }, [user, token, dispatch]);

  return <>{children}</>;
};

export default AuthChecker;