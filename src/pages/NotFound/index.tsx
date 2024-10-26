import { Link as ChakraLink, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<Flex
			direction="column"
			justify="center"
			gap="2.5rem"
			align="center"
			h="100vh"
			px="1.5rem"
		>
			<title>404</title>
			<Heading fontSize={80} fontWeight={600} color="primary.100">
				404
			</Heading>
			<Heading fontSize={20} fontWeight={400} textAlign="center">
				Ops! Page not found. Return to the home screen by clicking{" "}
				<ChakraLink color="primary.100" textDecor="underline" fontWeight={600}>
					<Link to="/">here</Link>
				</ChakraLink>
			</Heading>
		</Flex>
	);
}
