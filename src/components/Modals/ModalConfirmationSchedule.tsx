import {
	ButtonGroup,
	Checkbox,
	Divider,
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	HStack,
	Icon,
	IconButton,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	Tooltip,
	useEditableControls,
} from "@chakra-ui/react";
import { Button } from "@components/Button";
import { useToast } from "@hooks/useToast";
import { MdCheck, MdClose, MdEdit, MdInfoOutline } from "react-icons/md";

interface ModalConfirmationScheduleProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ModalConfirmationSchedule = ({
	isOpen,
	onClose,
}: ModalConfirmationScheduleProps) => {
	// const {
	// 	accountInfo: { address },
	// } = useAuth();
	const { toastSuccess } = useToast();

	const sendRequestForSchedule = () => {
		toastSuccess({
			title: "Schedule sent successfully",
			description: "We will send you an email when it is completed",
		});
		onClose();
	};

	function EditableControls() {
		const {
			isEditing,
			getSubmitButtonProps,
			getCancelButtonProps,
			getEditButtonProps,
		} = useEditableControls();

		return isEditing ? (
			<ButtonGroup justifyContent="center" size="sm">
				<IconButton
					aria-label="Submit edit button"
					icon={<MdCheck />}
					{...getSubmitButtonProps()}
				/>
				<IconButton
					aria-label="Cancel edit button"
					icon={<MdClose />}
					{...getCancelButtonProps()}
				/>
			</ButtonGroup>
		) : (
			<Flex justifyContent="center">
				<Tooltip label="Edit Address">
					<IconButton
						size="sm"
						aria-label="Edit input button"
						icon={<MdEdit />}
						{...getEditButtonProps()}
					/>
				</Tooltip>
			</Flex>
		);
	}

	const address =
		"Av. Brig. Faria Lima, 3732 - 18º andar - Itaim Bibi, São Paulo - SP, 04538-132";
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			size={{ base: "xs", "2xl": "md" }}
		>
			<ModalOverlay bg="modalOverlay" />
			<ModalContent w="90%" bg="background.secondary">
				<ModalHeader>Schedule pick-up</ModalHeader>
				<Divider />
				<ModalCloseButton />
				<ModalBody>
					<Stack as="form" pb="2rem">
						<Text fontSize={{ base: 16, "2xl": 18 }}>
							Are you sure do you want a schedulement for:
						</Text>
						<Editable
							defaultValue={address}
							fontSize={18}
							fontWeight={700}
							isPreviewFocusable={false}
						>
							<EditablePreview alignSelf="end" />
							<HStack justify="end">
								<Input as={EditableInput} />
								<EditableControls />
							</HStack>
						</Editable>

						<HStack>
							<Text>Choose the volume of recicle:</Text>
							<Tooltip
								hasArrow
								bg="gray.300"
								color="color.primary"
								label="Small volume is for mobile, etc. Big is for TV, etc."
							>
								<span>
									<MdInfoOutline fontSize={18} />
								</span>
							</Tooltip>
						</HStack>

						<HStack>
							<Checkbox /> <Text>Small</Text>
						</HStack>
						<HStack>
							<Checkbox /> <Text>Big</Text>
						</HStack>
					</Stack>
					<HStack fontSize={14}>
						<Icon as={MdInfoOutline} fontSize={16} color="red.500" />

						<Text color="gray.800">
							After submitting your request, we will send you an email when it
							has been completed.
						</Text>
					</HStack>
				</ModalBody>
				<ModalFooter gap="1rem">
					<Button text="Cancel" variant="ghost" onClick={onClose} />
					<Button text="Schedule" onClick={sendRequestForSchedule} />
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
