import {
	Checkbox,
	HStack,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	Button as CKButton,
	useDisclosure,
	VStack,
	Center,
	Icon,
} from "@chakra-ui/react";
import {
	MdKeyboardArrowDown,
	MdKeyboardArrowLeft,
	MdLogout,
} from "react-icons/md";
import { useTheme } from "@contexts/useTheme";
import { light } from "@styles/light";
import { dark } from "@styles/dark";
import { Button } from "./Button";
import { ModalConfirmationSchedule } from "./Modals/ModalConfirmationSchedule";
import { useAuth } from "@contexts/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
	const { handleToggleTheme, theme } = useTheme();
	const confirmationDisclosure = useDisclosure();
	const { signOut } = useAuth();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const isProfilePath = pathname === "/profile";
	return (
		<HStack
			w="100%"
			justify="space-between"
			px="1rem"
			h={{ base: "3rem", "2xl": "4rem" }}
		>
			{isProfilePath ? (
				<Icon
					as={MdKeyboardArrowLeft}
					fontSize={24}
					color="primary.100"
					onClick={() => navigate("/")}
					cursor="pointer"
				/>
			) : (
				<Text
					color="primary.100"
					fontWeight="600"
					fontSize={{ base: 18, xl: 18, "2xl": 20 }}
				>
					Clique&Recicle
				</Text>
			)}

			<HStack gap="1rem">
				{!isProfilePath && (
					<Button
						whiteSpace={{ base: "pre-wrap", "2xl": "normal" }}
						h="auto"
						size={{ base: "sm", "2xl": "md" }}
						alignSelf="center"
						text="Schedule a pick-up"
						onClick={confirmationDisclosure.onOpen}
					/>
				)}

				<Menu>
					<HStack alignItems="center">
						<MenuButton
							pr={{ base: 0, "2xl": "1rem" }}
							pl="0.2rem"
							bgColor="transparent"
							color="color.primary"
							as={CKButton}
							rightIcon={<MdKeyboardArrowDown fontSize="1.3125rem" />}
							_hover={{ bgColor: "transparent", opacity: 0.8 }}
							_active="transparent"
							fontWeight="normal"
							fontSize={{ base: 16, "2xl": 18 }}
						>
							<HStack>
								<Center
									borderRadius="full"
									bg="primary.100"
									w={{ base: "2rem", "2xl": "2rem" }}
									h={{ base: "2rem", "2xl": "2rem" }}
									color="white"
									fontSize={12}
									fontWeight={600}
								>
									<Text>LV. 1</Text>
								</Center>
								<Text>BCG</Text>
							</HStack>
						</MenuButton>
						<MenuList
							w="5rem"
							bg="background.secondary"
							border="none"
							boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
						>
							<MenuItem
								bg="background.secondary"
								color="color.primary"
								onClick={() => navigate("/profile")}
							>
								My profile
							</MenuItem>
							<MenuItem bg="background.secondary" color="color.primary">
								<VStack align="flex-start">
									<Text> Change theme:</Text>
									<HStack>
										<Checkbox
											onChange={handleToggleTheme}
											isChecked={theme === light}
											colorScheme="green"
										/>
										<Text>Ligth</Text>
										<Checkbox
											onChange={handleToggleTheme}
											isChecked={theme === dark}
											colorScheme="green"
										/>
										<Text>Dark</Text>
									</HStack>
								</VStack>
							</MenuItem>
							<MenuDivider />
							<MenuItem bg="background.secondary" color="color.primary">
								<HStack onClick={signOut}>
									<Text>Logout</Text>
									<MdLogout fontSize={16} />
								</HStack>
							</MenuItem>
						</MenuList>
					</HStack>
				</Menu>
			</HStack>
			<ModalConfirmationSchedule
				isOpen={confirmationDisclosure.isOpen}
				onClose={confirmationDisclosure.onClose}
			/>
		</HStack>
	);
};
