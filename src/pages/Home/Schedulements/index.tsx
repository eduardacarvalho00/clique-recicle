import {
	TabPanel,
	VStack,
	Card,
	CardHeader,
	Heading,
	CardBody,
	Text,
} from "@chakra-ui/react";
interface SpanProps {
	text: string;
}

export const SchedulementsTabPanel = () => {
	const Span = ({ text }: SpanProps) => {
		const color =
			text === "Pending"
				? "orange"
				: text === "Scheduled"
					? "blue"
					: text === "Done"
						? "green"
						: "color.primary";
		return <span style={{ color: color, fontWeight: "normal" }}>{text}</span>;
	};
	return (
		<TabPanel>
			<VStack>
				<Card>
					<CardHeader>
						<Heading size="md">Schedule day: Pending</Heading>
					</CardHeader>
					<CardBody fontWeight={500}>
						<VStack align="start">
							<Text>
								Status: <Span text="Pending" /> - Awaiting route confirmation
							</Text>
							<Text>
								Pick up order:
								<Span text="21284" />
							</Text>
							<Text>
								Address:{" "}
								<Span
									text="Av. Brig. Faria Lima, 3732 - 18º andar - Itaim Bibi,
São Paulo - SP, 04538-132"
								/>
							</Text>
							<Text>
								Freight: <Span text="R$ 10,00" />
							</Text>
							<Text>
								Type of pick up: <Span text="Medium" />
							</Text>
						</VStack>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>
						<Heading size="md">
							Schedule day: <Span text="10/24/2024 18:00" />
						</Heading>
					</CardHeader>
					<CardBody fontWeight={500}>
						<VStack align="start">
							<Text>
								Status: <Span text="Done" />
							</Text>
							<Text>
								Pick up order: <Span text="124" />
							</Text>
							<Text>
								Address:{" "}
								<Span
									text="Av. Brig. Faria Lima, 3732 - 18º andar - Itaim Bibi,
São Paulo - SP, 04538-132"
								/>
							</Text>
							<Text>
								Freight: <Span text="R$ 8,00" />
							</Text>
							<Text>
								Type of pick up: <Span text="Medium" />
							</Text>
						</VStack>
					</CardBody>
				</Card>
			</VStack>
		</TabPanel>
	);
};
