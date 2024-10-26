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
import { TableItem, TableItemGrouped } from "./TableItem";
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
	// const [orders, setOrders] = useState<DashboardProps[]>([]);
	// const [isLoading, setIsloading] = useState<boolean>(false);

	// useEffect(() => {
	// 	try {
	// 		setIsloading(true);
	// 		fetch("http://localhost:3000/api/v1/orders/")
	// 			.then((response) => response.json())
	// 			.then((data) => setOrders(data));
	// 	} finally {
	// 		setIsloading(false);
	// 	}
	// }, []);
	const mockDashboard: DashboardProps[] = [
		{
			routeId: 1,
			user: "João Silva",
			date: "08/12/2024",
			status: "Scheduled",
			freight: 30.0,
			address: "Museu de Arte de São Paulo Assis Chateaubriand",
		},
		{
			routeId: 1,
			date_schedule: "10/25/2024",
			user: "Maria Santos",
			date: "08/20/2024",
			status: "Scheduled",
			freight: 45.5,
			address: "Beco do Batman, R. Medeiros de Albuquerque",
		},
		{
			routeId: 1,
			date_schedule: "10/25/2024",
			user: "Pedro Almeida",
			date: "10/12/2024",
			status: "Scheduled",
			freight: 25.0,
			address: "Shopping Iguatemi São Paulo, Av. Brig. Faria Lima",
		},
		{
			user: "Carlos Pereira",
			date: "08/12/2024",
			status: "Pending",
			freight: 52.75,
			address: "Rua do Sol, 1213 - São Paulo/SP",
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
			user: "Luiza Silva",
			date: "08/12/2024",
			status: "Pending",
			freight: 48.0,
			address: "Rua da Liberdade, 1919 - São Paulo/SP",
		},
		{
			user: "Carlos Pereira",
			date: "08/12/2024",
			status: "Pending",
			freight: 52.75,
			address: "Rua do Sol, 1213 - São Paulo/SP",
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
			date_schedule: "10/25/2024",
			user: "Juliana Silva",
			date: "08/12/2024",
			status: "Pending",
			freight: 42.0,
			address: "Rua da Vitória, 2727 - São Paulo/SP",
		},
		{
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
			user: "Gabriel Costa",
			date: "08/12/2024",
			status: "Pending",
			freight: 33.5,
			address: "Avenida Brasil, 3333 - São Paulo/SP",
		},
	];

	type GroupedData = {
		withRouteId: Record<number, DashboardProps[]>;
		withoutRouteId: DashboardProps[];
	};

	// Função para agrupar os dados por routeId
	const groupDataByRouteId = (data: DashboardProps[]): GroupedData => {
		return data.reduce<GroupedData>(
			(acc, item) => {
				if (item.routeId !== undefined) {
					if (!acc.withRouteId[item.routeId])
						acc.withRouteId[item.routeId] = [];
					acc.withRouteId[item.routeId].push(item);
				} else {
					acc.withoutRouteId.push(item);
				}
				return acc;
			},
			{ withRouteId: {}, withoutRouteId: [] },
		);
	};

	const { withRouteId, withoutRouteId } = groupDataByRouteId(mockDashboard);
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
						{/* Renderiza grupos de dados com routeId */}
						{Object.values(withRouteId).map((group, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<TableItemGrouped key={index} data={group} />
						))}

						{/* Renderiza itens sem routeId */}
						{withoutRouteId.map((item, index) => (
							<TableItem
								key={`no-route-${
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									index
								}`}
								data={item}
							/>
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
