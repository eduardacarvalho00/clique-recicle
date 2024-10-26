import {
	TabPanel,
	VStack,
	Card,
	CardHeader,
	Heading,
	CardBody,
	Text,
} from "@chakra-ui/react";

export const SchedulementsTabPanel = () => {
	return (
		<TabPanel>
			<VStack>
				<Card>
					<CardHeader>
						<Heading size="md">Schedule day: Pending</Heading>
					</CardHeader>
					<CardBody>
						<VStack align="start">
							<Text>Status: Pending - awaiting route confirmation</Text>
							<Text>Pick up order: 21284</Text>
							<Text>
								Address: Av. Brig. Faria Lima, 3732 - 18º andar - Itaim Bibi,
								São Paulo - SP, 04538-132
							</Text>
							<Text>Freight: R$ 10,00</Text>
							<Text>Type of pick up: Medium</Text>
						</VStack>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>
						<Heading size="md">Schedule day: 10/24/2024 18:00</Heading>
					</CardHeader>
					<CardBody>
						<VStack align="start">
							<Text>Status: Done</Text>
							<Text>Pick up order: 21284</Text>
							<Text>
								Address: Av. Brig. Faria Lima, 3732 - 18º andar - Itaim Bibi,
								São Paulo - SP, 04538-132
							</Text>
							<Text>Freight: R$ 10,00</Text>
							<Text>Type of pick up: Medium</Text>
						</VStack>
					</CardBody>
				</Card>
			</VStack>
		</TabPanel>
	);
};
