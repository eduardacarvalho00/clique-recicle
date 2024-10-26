import {
	Card,
	CardBody,
	CardHeader,
	Divider,
	Flex,
	Heading,
	Text,
	Tooltip,
	VStack,
} from "@chakra-ui/react";
import { Button } from "@components/Button";
import { Header } from "@components/Header";

export const Profile = () => {
	"ifood, mcdonalds, uber, ";
	return (
		<Flex flexDir="column" h="100vh" bg="background.primary">
			<title>Click&Recicle | Profile</title>
			<Header />
			<Divider mb="0.5rem" />

			<VStack my="0.5rem" gap="0.2rem">
				<Text textAlign="center" fontSize={23} fontWeight={700}>
					You're at level: <span style={{ color: "#519872" }}>1</span>
				</Text>
				<Text fontSize={12}>20/100 to level 2!</Text>
			</VStack>

			<VStack px="1.5rem" align="start">
				<Text fontWeight={600} fontSize={20}>
					Exchange your points:
				</Text>

				<VStack w="100%">
					<Card w={{ base: "100%", "2xl": "30rem" }}>
						<CardHeader>
							<Heading size="md">Level 1: Coupon of R$10 at Ifood</Heading>
						</CardHeader>

						<CardBody display="flex" fontWeight={500} justifyContent="center">
							<Button
								text="Generate coupon"
								alignSelf="center"
								w={{ base: "100%", "2xl": "15rem" }}
							/>
						</CardBody>
					</Card>

					<Card w={{ base: "100%", "2xl": "30rem" }}>
						<CardHeader>
							<Heading size="md">Level 2: Coupon of R$15 at Uber</Heading>
						</CardHeader>

						<CardBody display="flex" fontWeight={500} justifyContent="center">
							<Tooltip
								label="Get to level 2 to generate this coupon"
								hasArrow
								bg="gray.300"
								color="color.primary"
							>
								<span>
									<Button
										isDisabled
										text="Generate coupon"
										alignSelf="center"
										w={{ base: "100%", "2xl": "15rem" }}
									/>
								</span>
							</Tooltip>
						</CardBody>
					</Card>
					<Card w={{ base: "100%", "2xl": "30rem" }}>
						<CardHeader>
							<Heading size="md">Level 3: Coupon of R$20 at MCDonalds</Heading>
						</CardHeader>

						<CardBody display="flex" fontWeight={500} justifyContent="center">
							<Tooltip
								label="Get to level 3 to generate this coupon"
								hasArrow
								bg="gray.300"
								color="color.primary"
							>
								<span>
									<Button
										isDisabled
										text="Generate coupon"
										alignSelf="center"
										w={{ base: "100%", "2xl": "15rem" }}
									/>
								</span>
							</Tooltip>
						</CardBody>
					</Card>
					<Card w={{ base: "100%", "2xl": "30rem" }}>
						<CardHeader>
							<Heading size="md">Level 4: Upcoming...</Heading>
						</CardHeader>
					</Card>
				</VStack>
			</VStack>
		</Flex>
	);
};
