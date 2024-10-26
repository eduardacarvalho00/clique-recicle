import { Tr, Td } from "@chakra-ui/react";
import { DashboardProps } from "@interfaces/dashboard";

interface TableItemProps {
	data: DashboardProps;
}

export const TableItem = ({ data }: TableItemProps) => {
	return (
		<Tr>
			<Td>{data.user}</Td>
			<Td>{data.date}</Td>
			<Td>{data.status}</Td>
			<Td>R${data.freight}</Td>
			<Td>{data.address}</Td>
		</Tr>
	);
};
