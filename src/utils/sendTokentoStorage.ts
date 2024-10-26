import { LOCAL_STORAGE_KEY } from "@constants/localStorageKey";

interface SendTokenToStorageProps {
  isAuthenticated: boolean;
}

export const sendTokenToStorage = ({
  isAuthenticated,
}: SendTokenToStorageProps) => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      isAuthenticated,
    })
  );
};
