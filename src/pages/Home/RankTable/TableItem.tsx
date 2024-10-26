import { Tr, Td, HStack, Text, Icon } from "@chakra-ui/react";
import { usersRank } from "@interfaces/usersRank";
import { FaCrown } from "react-icons/fa";

interface TableItemProps {
	data: usersRank;
}

export const TableItem = ({ data }: TableItemProps) => {
	return (
		<Tr>
			<Td>
				<HStack gap="1rem" align="flex-start">
					{data.id === "1" && (
						<Icon as={FaCrown} fontSize={19} color="yellow.300" />
					)}
					<Text
						fontWeight={data.id === "1" ? 700 : data.id === "2" ? 600 : 400}
					>
						{data.id}
					</Text>
				</HStack>
			</Td>
			<Td>{data.name}</Td>
			<Td>{data.level}</Td>
		</Tr>
	);
};
