import { Link } from "react-router-dom";
import {
    chakra,
    Stack,
    HStack,
    Text,
    Box,
    Flex,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';
// import BG from '/pexels-olia-danilevich.jpg'
import Footer from "../components/Footer";

const Home = () => {
    const BG = '/pexels-olia-danilevich.jpg'
    return (
        <>
            <Stack
                p={{ base: 5, md: 10 }}
                fontSize={{base:10, md:20}}
                direction={{ base: 'column', md: 'row' }}
                bgImage={BG}
                backgroundSize="cover"
                backgroundPosition="center right"
                backgroundRepeat="no-repeat"
                minH='100vh'
                align="center"
                justify="center"
                position="relative"
            >

                <Box
                    bgImage='linear-gradient(45deg, #e9ecef 25%, rgba(0, 0, 0, 0) 95%)'
                    // bgImage={{ base: 'none', md: 'linear-gradient(45deg, #e9ecef 25%, rgba(0, 0, 0, 0) 95%)' }}
                    position="absolute"
                    top="0"
                    bottom="0"
                    left="0"
                    right="0"
                    zIndex="0"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    opacity="0.8"
                    h='100%'
                ></Box>
                <Stack
                    pos="relative"
                    zIndex={1}
                    direction="column"
                    justifyContent="center"
                    spacing={6}
                    maxW="60%"
                    bottom={120}
                >
                    <chakra.h1
                        fontSize={{ base: '3xl', sm: '5xl' }}
                        lineHeight={1}
                        fontWeight="bold"
                        textAlign="left"
                        justifyContent="space-between"
                    >
                        Studi Independent Kampus Merdeka <br />
                    </chakra.h1>
                    <Text
                        // fontSize="1.2rem"
                        fontSize={{ base: 'md', sm: 'xl' }}
                        textAlign="left"
                        lineHeight="1.375"
                        fontWeight="400"
                        justifyContent="space-between"
                        maxW='80%'
                        color={useColorModeValue('gray.500', 'gray.700')}
                    >
                        Ambil Kendali Masa Depanmu
                        Kampus Merdeka adalah cara terbaik berkuliah.
                        Dapatkan kemerdekaan untuk membentuk masa depan yang
                        sesuai dengan aspirasi kariermu.
                    </Text>
                    <HStack spacing={{ base: 0, sm: 2 }} flexWrap="wrap">
                        <Link to="/students">
                            <chakra.button
                                className="test-button"
                                data-testid="student-btn"
                                h={10}
                                px={6}
                                color="white"
                                variant="solid"
                                fontSize="md"
                                rounded="md"
                                mb={{ base: 2, sm: 0 }}
                                zIndex={5}
                                lineHeight={1}
                                bg="blue.400"
                                _hover={{ bg: 'blue.600' }}
                            >
                                Student Portal
                            </chakra.button>
                        </Link>
                    </HStack>
                </Stack>
            </Stack>
            {/* <Footer /> */}
        </>

        
    );
};

export default Home;