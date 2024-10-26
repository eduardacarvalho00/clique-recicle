import {
	Input as ChakraInput,
	InputProps as ChakraInputProps,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction, ReactElement, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
	label?: string;
	labelColor?: string;
	error?: FieldError;
	leftIconInput?: ReactElement;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ label, error, leftIconInput, width, ...rest },
	ref,
) => {
	return (
		<FormControl isInvalid={!!error} w={width ? width : "100%"}>
			<Flex align="flex-start">
				{label && (
					<FormLabel
						color="color.primary"
						fontSize={{ base: "14", "4xl": "16" }}
						fontWeight={600}
					>
						{label}
					</FormLabel>
				)}
			</Flex>
			<InputGroup>
				{leftIconInput && (
					<InputLeftElement h="-webkit-fill-available" pointerEvents="none">
						{leftIconInput}
					</InputLeftElement>
				)}

				<ChakraInput
					bg="background.secondary"
					borderRadius="6px"
					size={{ base: "sm", "4xl": "lg" }}
					focusBorderColor="primary.100"
					transition="all 0.5s ease"
					_hover={{
						filter: "brightness(0.9)",
					}}
					ref={ref}
					{...rest}
				/>
			</InputGroup>

			{error && (
				<FormErrorMessage fontSize="16">{error.message}</FormErrorMessage>
			)}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
