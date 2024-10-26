import { ChakraProvider } from "@chakra-ui/react";
import { queryClient } from "@services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { useTheme } from "./useTheme";
import { AuthProvider } from "./useAuth";

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
	const { theme } = useTheme();
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<AuthProvider>{children} </AuthProvider>
				</BrowserRouter>
			</ChakraProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};
