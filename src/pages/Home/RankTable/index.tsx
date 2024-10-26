import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Flex,
	HStack,
	Icon,
	Text,
	Button,
} from "@chakra-ui/react";
import { usersRank } from "@interfaces/usersRank";
import { TableItem } from "./TableItem";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface THeadeProps {
	text: string;
}

const THead = ({ text }: THeadeProps) => {
	return (
		<Th color="color.primary" fontSize={{ base: 16, "2xl": 18 }}>
			{text}
		</Th>
	);
};

export const RankTable = () => {
	const mockUsersRank: usersRank[] = [
		{
			id: "1",
			name: "John Doe",
			level: 5,
			points: 1000,
			quantityPickup: 50,
		},
		{
			id: "2",
			name: "Jane Smith",
			level: 4,
			points: 800,
			quantityPickup: 40,
		},
		{
			id: "3",
			name: "Michael Johnson",
			level: 3,
			points: 600,
			quantityPickup: 30,
		},
		{
			id: "4",
			name: "Emily Davis",
			level: 2,
			points: 400,
			quantityPickup: 20,
		},
		{
			id: "5",
			name: "David Miller",
			level: 1,
			points: 200,
			quantityPickup: 10,
		},
		{
			id: "7",
			name: "Benjamin Nelson",
			level: 4,
			points: 900,
			quantityPickup: 45,
		},
		{
			id: "8",
			name: "Sophia Martinez",
			level: 2,
			points: 350,
			quantityPickup: 15,
		},
		{
			id: "9",
			name: "William Anderson",
			level: 3,
			points: 700,
			quantityPickup: 35,
		},
		{ id: "10", name: "Ava Lee", level: 1, points: 150, quantityPickup: 5 },
		{
			id: "11",
			name: "Ethan Thomas",
			level: 5,
			points: 1100,
			quantityPickup: 55,
		},
		{
			id: "12",
			name: "Charlotte Walker",
			level: 0,
			points: 0,
			quantityPickup: 0,
		},
		{
			id: "13",
			name: "James Wright",
			level: 3,
			points: 650,
			quantityPickup: 32,
		},
		{
			id: "14",
			name: "Mia Allen",
			level: 2,
			points: 380,
			quantityPickup: 18,
		},
		{
			id: "15",
			name: "Noah Campbell",
			level: 4,
			points: 850,
			quantityPickup: 42,
		},
	];

	return (
		<>
			<TableContainer
				maxH={{ base: "", "2xl": "30rem" }}
				overflowY="auto"
				css={{
					"&::-webkit-scrollbar": {
						width: "4px",
					},
					"&::-webkit-scrollbar-track": {
						width: "4px",
					},
					"&::-webkit-scrollbar-thumb": {
						background: "#707372",
						borderRadius: "24px",
					},
				}}
			>
				<Table
					size={{ base: "sm", "2xl": "md" }}
					colorScheme="green"
					variant="simple"
					borderRadius="6px"
				>
					<Thead position="sticky" top={0} bg="background.primary">
						<Tr
							css={{
								Th: { textTransform: "initial", fontWeight: 600 },
							}}
						>
							<THead text="Rank" />
							<THead text="Name" />
							<THead text="Level" />
							<THead text="Points" />
						</Tr>
					</Thead>
					<Tbody>
						{mockUsersRank.map((item) => (
							<TableItem key={item.id} data={item} />
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<Flex
				justifyContent="center"
				fontSize={{ base: 14, "2xl": 16 }}
				mt="0.5rem"
			>
				<HStack css={{ button: { border: "none" } }}>
					<Button
						variant="outline"
						display="flex"
						_hover={{ filter: "brightness(0.8)" }}
						aria-label="Left arrow"
						isDisabled
						leftIcon={<Icon as={MdArrowBackIos} />}
						fontSize={{ base: 14, "2xl": 16 }}
						size={{ base: "sm", "2xl": "md" }}
						color="color.primary"
					>
						Back
					</Button>

					<HStack spacing="1.5" fontWeight={500}>
						<Text>1</Text>
						<Text>de</Text>
						<Text>2</Text>
					</HStack>

					<Button
						color="color.primary"
						variant="outline"
						display="flex"
						_hover={{ filter: "brightness(0.8)" }}
						aria-label="Right arrow"
						rightIcon={<Icon as={MdArrowForwardIos} />}
						fontSize={{ base: 14, "2xl": 16 }}
						size={{ base: "sm", "2xl": "md" }}
					>
						Next
					</Button>
				</HStack>
			</Flex>
		</>
	);
};
