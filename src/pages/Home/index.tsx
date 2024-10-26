import {
	Divider,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { ModalConfirmationSchedule } from "@components/Modals/ModalConfirmationSchedule";
import { RankTable } from "./RankTable";
import { SchedulementsTabPanel } from "./Schedulements";
import { Dashboard } from "./Dashboard";

export function Home() {
	const confirmationDisclosure = useDisclosure();

	return (
		<Flex flexDir="column" h="100vh" bg="background.primary">
			<title>Ecollect</title>
			<Header />
			<VStack mt="1rem" h="75%">
				<Tabs w="100%" isFitted colorScheme="green" bg="transparent" h="100%">
					<TabList>
						<Tab>Home</Tab>
						<Tab>Schedulements</Tab>
						<Tab>Dashboard</Tab>
					</TabList>

					<TabPanels h="100%">
						<TabPanel px="1.5rem" h="100%" mt="1rem">
							<Text fontWeight={600} mb="0.5rem">
								Global ranking:
							</Text>
							<RankTable />
							<Divider my="2rem" />
							<VStack gap="2rem" align="start">
								<Text
									fontWeight={600}
									textAlign={{ base: "center", "2xl": "start" }}
									fontSize={{ base: 16, "2xl": 18 }}
								>
									Schedule a new pick-up in just a few clicks:
								</Text>
								<Button
									mb="2rem"
									alignSelf="center"
									text="Schedule a pick-up"
									onClick={confirmationDisclosure.onOpen}
								/>
							</VStack>
						</TabPanel>
						<SchedulementsTabPanel />
						<TabPanel>
							<Dashboard />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</VStack>
			<ModalConfirmationSchedule
				isOpen={confirmationDisclosure.isOpen}
				onClose={confirmationDisclosure.onClose}
			/>
		</Flex>
	);
}
