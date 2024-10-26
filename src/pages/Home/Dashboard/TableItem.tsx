import { Tr, Td } from "@chakra-ui/react";
import { DashboardProps } from "@interfaces/dashboard";

interface TableItemProps {
	data: DashboardProps[];
}

export const TableItem = ({ data }: TableItemProps) => {
	return (
		<Tr>
			<Td>
				{data.map((item) => (
					<div key={item.user}>{item.date}</div>
				))}
			</Td>
			<Td>
				{data.map((item) => (
					<div key={item.user}>{item.user}</div>
				))}
			</Td>
			<Td>
				{data.map((item) => (
					<div
						key={item.user}
						style={{
							color:
								item.status === "Pending"
									? "orange"
									: item.status === "Scheduled"
										? "blue"
										: "green",
						}}
					>
						{item.status}
					</div>
				))}
			</Td>
			<Td>
				{data.map((item) => (
					<div key={item.user}>
						{item.date_schedule ? item.date_schedule : "Schedule pending"}
					</div>
				))}
			</Td>
			<Td>
				{data.map((item) => (
					<div key={item.user}>R${item.freight}</div>
				))}
			</Td>
			<Td>
				{data.map((item) => (
					<div key={item.user}>{item.address}</div>
				))}
			</Td>
			<Td>
				<a
					href="https://maps.app.goo.gl/m36EPzndaKpikfBd7"
					style={{ textDecoration: "underline", color: "blue" }}
					target="blank"
				>
					View route
				</a>
			</Td>
		</Tr>
	);
};
