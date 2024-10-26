import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { LoginRequest } from "@api/auth";
import { AccountInfoProps } from "@interfaces/users";
import { sendTokenToStorage } from "@utils/sendTokentoStorage";

import { queryClient } from "@services/queryClient";
import {
	LOCAL_STORAGE_KEY,
	LocalStorageKeyProps,
} from "@constants/localStorageKey";

interface Props {
	children: ReactNode;
}

interface AuthData {
	loginDefault: (data: LoginRequest) => Promise<void>;
	signOut: () => void;
	accountInfo: AccountInfoProps;
	isLoading: boolean;
	handleSetAccountInfo: (data: AccountInfoProps) => void;
}

const AuthContext = createContext({} as AuthData);

export const AuthProvider = ({ children }: Props) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const [accountInfo, setAccountInfo] = useState<AccountInfoProps>({
		id: "",
		email: "",
		isAuthenticated: false,
	});

	const handleSetAccountInfo = (data: AccountInfoProps) => {
		setAccountInfo(data);
	};

	const setInfos = (email: string, id: string) => {
		// const { name, email, _id, roles, address, surname } =
		// 	decodeToken(accessToken);

		sendTokenToStorage({
			isAuthenticated: true,
		});

		setAccountInfo({
			email,
			id: id,
			isAuthenticated: true,
		});

		// setAuthToken(accessToken);

		navigate("/");
	};

	const loginDefault = async (data: LoginRequest) => {
		try {
			setIsLoading(true);
			// const { access_token, refresh_token } = await login(data);

			setInfos(data.email, "1");
		} finally {
			setIsLoading(false);
		}
	};

	const signOut = async () => {
		localStorage.removeItem(LOCAL_STORAGE_KEY);
		queryClient.removeQueries();

		setAccountInfo({
			id: "",
			email: "",
			isAuthenticated: false,
		});

		navigate("/");
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(() => {
			try {
				const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

				if (storage) {
					const { isAuthenticated } = JSON.parse(
						storage,
					) as LocalStorageKeyProps;

					// const { email, _id, name, roles, address, surname } =
					// 	decodeToken(token);

					setAccountInfo({
						id: "1",
						email: "clique@recicle.com",
						isAuthenticated,
					});

					// setAuthToken(token);
				}
			} catch {
				signOut();
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				loginDefault,
				signOut,
				accountInfo,
				isLoading,
				handleSetAccountInfo,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
};
