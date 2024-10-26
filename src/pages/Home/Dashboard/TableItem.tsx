import { Tr, Td } from "@chakra-ui/react";
import { DashboardProps } from "@interfaces/dashboard";

export const TableItemGrouped: React.FC<{ data: DashboardProps[] }> = ({
	data,
}) => {
	return (
		<Tr>
			<Td>{data[0].date}</Td>
			<Td>
				{data.map((item) => (
					<div key={item.user}>{item.user}</div>
				))}
			</Td>
			<Td>
				{data.map((item) => (
					<div
						key={item.user}
						style={{ color: item.status === "Pending" ? "red" : "green" }}
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
					href="https://maps.app.goo.gl/ptTuYuRTVqmTXpdc6"
					style={{ textDecoration: "underline", color: "blue" }}
				>
					Ver Rota
				</a>
			</Td>
		</Tr>
	);
};

// Componente para exibir itens individuais sem routeId
export const TableItem: React.FC<{ data: DashboardProps }> = ({ data }) => {
	return (
		<Tr>
			<Td>{data.date}</Td>
			<Td>{data.user}</Td>
			<Td style={{ color: data.status === "Pending" ? "red" : "green" }}>
				{data.status}
			</Td>
			<Td>{data.date_schedule ? data.date_schedule : "Schedule pending"}</Td>
			<Td>R${data.freight}</Td>
			<Td>{data.address}</Td>
			<Td>No route generated</Td>
		</Tr>
	);
};
