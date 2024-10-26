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
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { DashboardProps } from "@interfaces/dashboard";

interface THeadeProps {
	text: string;
}

const THead = ({ text }: THeadeProps) => {
	return (
		<Th color="color.primary" fontSize={{ base: 16, "2xl": 18 }}>
			<Text>{text}</Text>
		</Th>
	);
};

export const Dashboard = () => {
	const mockUsersRank: DashboardProps[] = [
		{
			routeId: 1,
			user: "João Silva",
			date: "08/12/2024",
			status: "Scheduled",
			freight: 30.0,
			address: "Rua das Flores, 123 - São Paulo/SP",
		},
		{
			routeId: 1,
			date_schedule: "10/25/2024",
			user: "Maria Santos",
			date: "08/20/2024",
			status: "Scheduled",
			freight: 45.5,
			address: "Avenida Brasil, 456 - São Paulo/RJ",
		},
		{
			routeId: 1,
			date_schedule: "10/25/2024",
			user: "Pedro Almeida",
			date: "10/12/2024",
			status: "Scheduled",
			freight: 25.0,
			address: "Rua da Paz, 789 - São Paulo/SP",
		},
		{
			routeId: 1,
			user: "Ana Oliveira",
			date: "08/12/2024",
			status: "Scheduled",
			freight: 38.25,
			address: "Avenida Paulista, 1011 - São Paulo/SP",
		},
		{
			routeId: 2,
			user: "Carlos Pereira",
			date: "08/12/2024",
			status: "Pending",
			freight: 52.75,
			address: "Rua do Sol, 1213 - São Paulo/SP",
		},
		{
			routeId: 1,
			date_schedule: "10/25/2024",
			user: "Laura Santos",
			date: "09/30/2024",
			status: "Scheduled",
			freight: 40.0,
			address: "Rua das Acácias, 1515 - São Paulo/SP",
		},
		{
			routeId: 3,
			user: "Bruno Costa",
			date: "08/12/2024",
			status: "Done",
			freight: 32.5,
			address: "Avenida Central, 1717 - São Paulo/SP",
		},
		{
			routeId: 2,
			user: "Luiza Silva",
			date: "08/12/2024",
			status: "Pending",
			freight: 48.0,
			address: "Rua da Liberdade, 1919 - São Paulo/SP",
		},
		{
			routeId: 1,
			date_schedule: "10/25/2024",
			user: "Maria Santos",
			date: "08/20/2024",
			status: "Scheduled",
			freight: 45.5,
			address: "Avenida Brasil, 456 - São Paulo/RJ",
		},
		{
			routeId: 1,
			date_schedule: "10/25/2024",
			user: "Pedro Almeida",
			date: "10/12/2024",
			status: "Scheduled",
			freight: 25.0,
			address: "Rua da Paz, 789 - São Paulo/SP",
		},
		{
			routeId: 1,
			user: "Ana Oliveira",
			date: "08/12/2024",
			status: "Scheduled",
			freight: 38.25,
			address: "Avenida Paulista, 1011 - São Paulo/SP",
		},
		{
			routeId: 2,
			user: "Carlos Pereira",
			date: "08/12/2024",
			status: "Pending",
			freight: 52.75,
			address: "Rua do Sol, 1213 - São Paulo/SP",
		},
		{
			routeId: 1,
			date_schedule: "10/25/2024",
			user: "Laura Santos",
			date: "09/30/2024",
			status: "Scheduled",
			freight: 40.0,
			address: "Rua das Acácias, 1515 - São Paulo/SP",
		},
		{
			routeId: 3,
			user: "Bruno Costa",
			date: "08/12/2024",
			status: "Done",
			freight: 32.5,
			address: "Avenida Central, 1717 - São Paulo/SP",
		},
		{
			routeId: 2,
			user: "Luiza Silva",
			date: "08/12/2024",
			status: "Pending",
			freight: 48.0,
			address: "Rua da Liberdade, 1919 - São Paulo/SP",
		},
		{
			routeId: 3,
			date_schedule: "10/25/2024",
			user: "Gustavo Almeida",
			date: "08/12/2024",
			status: "Done",
			freight: 35.0,
			address: "Avenida dos Estados, 2121 - São Paulo/SP",
		},
		{
			routeId: 3,
			user: "Fernanda Santos",
			date: "02/02/2024",
			status: "Done",
			freight: 39.75,
			address: "Rua da Paz, 2323 - São Paulo/SP",
		},
		{
			routeId: 1,
			date_schedule: "10/25/2024",
			user: "Ricardo Costa",
			date: "08/12/2024",
			status: "Scheduled",
			freight: 51.25,
			address: "Avenida das Américas, 2525 - São Paulo/SP",
		},
		{
			routeId: 4,
			date_schedule: "10/25/2024",
			user: "Juliana Silva",
			date: "08/12/2024",
			status: "Pending",
			freight: 42.0,
			address: "Rua da Vitória, 2727 - São Paulo/SP",
		},
		{
			routeId: 4,
			user: "Felipe Almeida",
			date: "08/12/2024",
			status: "Pending",
			freight: 36.5,
			address: "Avenida Independência, 2929 - São Paulo/SP",
		},
		{
			routeId: 3,
			date_schedule: "10/25/2024",
			user: "Amanda Santos",
			date: "08/12/2024",
			status: "Done",
			freight: 50.0,
			address: "Rua da Paz, 3131 - São Paulo/SP",
		},
		{
			routeId: 2,
			user: "Gabriel Costa",
			date: "08/12/2024",
			status: "Pending",
			freight: 33.5,
			address: "Avenida Brasil, 3333 - São Paulo/SP",
		},
		{
			routeId: 1,
			user: "Letícia Silva",
			date: "08/12/2024",
			status: "Scheduled",
			freight: 37.25,
			address: "Rua da Liberdade, 3535 - São Paulo/SP",
		},
	];

	type GroupedData = Record<number, DashboardProps[]>;

	// Função para agrupar os dados por routeId
	const groupDataByRouteId = (data: DashboardProps[]): GroupedData => {
		return data.reduce<GroupedData>((acc, item) => {
			if (!acc[item.routeId]) acc[item.routeId] = []; // Se não existe o routeId, inicializa como array vazio
			acc[item.routeId].push(item); // Adiciona o item ao array do routeId
			return acc;
		}, {});
	};

	const groupedData = groupDataByRouteId(mockUsersRank);
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
					size={{ base: "sm", "2xl": "sm" }}
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
							<THead text="Date of request" />
							<THead text="User" />
							<THead text="Status" />
							<THead text="Date Schedule" />
							<THead text="Freight" />
							<THead text="Address" />
							<THead text="Route" />
						</Tr>
					</Thead>
					<Tbody>
						{Object.values(groupedData).map((group, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<TableItem key={index} data={group} />
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
