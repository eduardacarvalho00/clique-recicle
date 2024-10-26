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
	Center,
	Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
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
	const [orders, setOrders] = useState<DashboardProps[]>([]);
	const [isLoading, setIsloading] = useState<boolean>(false);

	useEffect(() => {
		try {
			setIsloading(true);
			fetch("http://localhost:3000/api/v1/orders/")
				.then((response) => response.json())
				.then((data) => setOrders(data));
		} finally {
			setIsloading(false);
		}
	}, []);

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

	const { withRouteId, withoutRouteId } = groupDataByRouteId(orders);
	return isLoading ? (
		<Center position="absolute" h="90%" w="97%">
			<Spinner color="green" />
		</Center>
	) : (
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
