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
import { TableItem } from "./TableItem";
import {
	MdArrowBackIos,
	MdArrowForwardIos,
	MdKeyboardArrowDown,
} from "react-icons/md";
import { DashboardProps } from "@interfaces/dashboard";

interface THeadeProps {
	text: string;
}

const THead = ({ text }: THeadeProps) => {
	return (
		<Th color="color.primary" fontSize={{ base: 16, "2xl": 18 }}>
			<HStack>
				<Text>{text}</Text>
				<MdKeyboardArrowDown />
			</HStack>
		</Th>
	);
};

export const Dashboard = () => {
	const mockUsersRank: DashboardProps[] = [
		{
			user: "João Silva",
			date: "2024-11-15",
			status: "Pending",
			freight: 30.0,
			address: "Rua das Flores, 123 - São Paulo/SP",
		},
		{
			user: "Maria Santos",
			date: "2024-11-18",
			status: "Scheduled",
			freight: 45.5,
			address: "Avenida Brasil, 456 - Rio de Janeiro/RJ",
		},
		{
			user: "Pedro Almeida",
			date: "2024-11-20",
			status: "Done",
			freight: 25.0,
			address: "Rua da Paz, 789 - Belo Horizonte/MG",
		},
		{
			user: "Ana Oliveira",
			date: "2024-11-22",
			status: "Pending",
			freight: 38.25,
			address: "Avenida Paulista, 1011 - São Paulo/SP",
		},
		{
			user: "Carlos Pereira",
			date: "2024-11-25",
			status: "Scheduled",
			freight: 52.75,
			address: "Rua do Sol, 1213 - Porto Alegre/RS",
		},
		{
			user: "Laura Santos",
			date: "2024-11-27",
			status: "Done",
			freight: 40.0,
			address: "Rua das Acácias, 1515 - Curitiba/PR",
		},
		{
			user: "Bruno Costa",
			date: "2024-12-01",
			status: "Pending",
			freight: 32.5,
			address: "Avenida Central, 1717 - Salvador/BA",
		},
		{
			user: "Luiza Silva",
			date: "2024-12-03",
			status: "Scheduled",
			freight: 48.0,
			address: "Rua da Liberdade, 1919 - Fortaleza/CE",
		},
		{
			user: "Gustavo Almeida",
			date: "2024-12-05",
			status: "Done",
			freight: 35.0,
			address: "Avenida dos Estados, 2121 - Recife/PE",
		},
		{
			user: "Fernanda Santos",
			date: "2024-12-07",
			status: "Pending",
			freight: 39.75,
			address: "Rua da Paz, 2323 - Belém/PA",
		},
		{
			user: "Ricardo Costa",
			date: "2024-12-09",
			status: "Scheduled",
			freight: 51.25,
			address: "Avenida das Américas, 2525 - Manaus/AM",
		},
		{
			user: "Juliana Silva",
			date: "2024-12-11",
			status: "Done",
			freight: 42.0,
			address: "Rua da Vitória, 2727 - Goiânia/GO",
		},
		{
			user: "Felipe Almeida",
			date: "2024-12-13",
			status: "Pending",
			freight: 36.5,
			address: "Avenida Independência, 2929 - Brasília/DF",
		},
		{
			user: "Amanda Santos",
			date: "2024-12-15",
			status: "Scheduled",
			freight: 50.0,
			address: "Rua da Paz, 3131 - Campo Grande/MS",
		},
		{
			user: "Gabriel Costa",
			date: "2024-12-17",
			status: "Done",
			freight: 33.5,
			address: "Avenida Brasil, 3333 - Cuiabá/MT",
		},
		{
			user: "Letícia Silva",
			date: "2024-12-19",
			status: "Pending",
			freight: 37.25,
			address: "Rua da Liberdade, 3535 - Macapá/AP",
		},
		{
			user: "Rodrigo Almeida",
			date: "2024-12-21",
			status: "Scheduled",
			freight: 49.75,
			address: "Avenida Central, 3737 - Rio Branco/AC",
		},
		{
			user: "Isabela Santos",
			date: "2024-12-23",
			status: "Done",
			freight: 41.0,
			address: "Rua das Flores, 3939 - Vitória/ES",
		},
		{
			user: "Victor Costa",
			date: "2024-12-25",
			status: "Pending",
			freight: 34.5,
			address: "Avenida Paulista, 4141 - São Paulo/SP",
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
							<THead text="User" />
							<THead text="Date" />
							<THead text="Status" />
							<THead text="Freight" />
							<THead text="Address" />
						</Tr>
					</Thead>
					<Tbody>
						{mockUsersRank.map((item) => (
							<TableItem key={item.user} data={item} />
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
