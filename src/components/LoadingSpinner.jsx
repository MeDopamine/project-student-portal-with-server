import { Flex, Spinner } from '@chakra-ui/react';

const LoadingSpinner = () => (
    <Flex
        align="center"
        justify="center"
        minH="100vh" // Set minimum height to cover the entire viewport
    >
        <Spinner size="xl" color="brand.400" />
    </Flex>
);

export default LoadingSpinner;