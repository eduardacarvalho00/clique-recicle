import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Button } from "@components/Button";
import { Input } from "@components/Form/Input";
import { useAuth } from "@contexts/useAuth";
import { useToast } from "@hooks/useToast";
import { useState } from "react";
import logo from "@assets/favIcon.png";

export const Login = () => {
	const { loginDefault } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { toastError } = useToast();

	const handleLoginDefault = async () => {
		try {
			await loginDefault({
				email,
				password,
			});
		} catch {
			toastError({ title: "Usuário e/ou senha inválidos" });
		}
	};

	return (
		<VStack h="100vh" py="8rem">
			<VStack>
				<Heading>Clique&Recicle</Heading>
				<Image
					src={logo}
					borderRadius="full"
					w={{ base: "8rem", "2xl": "12rem" }}
					h={{ base: "8rem", "2xl": "12rem" }}
				/>
			</VStack>

			<VStack
				px="2rem"
				h="100%"
				justify="center"
				w={{ base: "100%", lg: "80%", "2xl": "60%" }}
				gap="2.5rem"
			>
				<Box w="100%">
					<Input label="E-mail" onChange={(e) => setEmail(e.target.value)} />
					<Input
						label="Password"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Text
						color="primary.100"
						fontWeight={500}
						textDecor="underline"
						fontSize={{ base: 13, "2xl": 16 }}
					>
						Forgot your password?
					</Text>
				</Box>
				<Button
					text="Login"
					w={{ base: "7rem", "2xl": "10rem" }}
					onClick={handleLoginDefault}
				/>
			</VStack>
			<Text
				textDecor="underline"
				fontWeight={500}
				fontSize={{ base: 13, "2xl": 16 }}
				color="primary.100"
			>
				Don't have an account? sign up
			</Text>
		</VStack>
	);
};
