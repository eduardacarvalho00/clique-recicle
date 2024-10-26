import { Tr, Td } from "@chakra-ui/react";
import { DashboardProps } from "@interfaces/dashboard";

interface TableItemProps {
	data: DashboardProps;
}

export const TableItem = ({ data }: TableItemProps) => {
	const color =
		data.status === "Pending"
			? "orange"
			: data.status === "Scheduled"
				? "blue"
				: "green";
	return (
		<Tr>
			<Td>{data.date}</Td>
			<Td>{data.user}</Td>
			<Td color={color}>{data.status}</Td>
			<Td>{data.date_schedule ? data.date_schedule : "Schedule pending"}</Td>

			<Td>R${data.freight}</Td>
			<Td>{data.address}</Td>
		</Tr>
	);
};
