import { useAuth } from "@contexts/useAuth";
import loadable from "@loadable/component";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { Route, Routes } from "react-router-dom";
const NotFound = loadable(() => import("@pages/NotFound"));

export const MainRoutes = () => {
	const { accountInfo } = useAuth();

	if (accountInfo.isAuthenticated) {
		return (
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		);
	}

	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};
