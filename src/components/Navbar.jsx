import { ReactNode } from 'react';
import React, { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import {
    Box,
    Image,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const NavLink = ({ children }) => (
    <Box
        px={2}
        py={1}
        rounded="md"
        fontWeight='bold'
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
    >
        {children}
    </Box>
);

const NavBar = ({screenName}) => {
    // console.log(screenName);
    const { colorMode, toggleColorMode } = useColorMode();
    const [screen, setScreen] = useState('');
    const Logo = '/Ruangguru-Logo.png'
    const Profile = '/Kemeja-Hitam-Polos-Ramadhan-wahyu-sahputraCompress2.png'
    useEffect(() => {
        setScreen(screenName)
    }, [screenName]);
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <ReactLink to="/"  >
                            <Box data-testid="home-page">
                                <Image src={Logo} alt="Logo" boxSize={8} width={14} />
                            </Box>
                        </ReactLink>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >   
                            {screen === 'home' ?
                                <>
                                    <NavLink data-testid="student-btn">
                                        <ReactLink to="/add" data-testid="add-page">
                                            Add Student
                                        </ReactLink>
                                    </NavLink>
                                </>
                                :
                                screen === 'add' ?
                                    <>
                                        <NavLink data-testid="student-page">
                                            <ReactLink to="/students" data-testid="student-page">
                                                All Student
                                            </ReactLink>
                                        </NavLink>
                                    </>
                                    :
                                    screen === 'edit' ?
                                        <>
                                            <NavLink>
                                                <ReactLink to="/students" data-testid="student-page">
                                                    All Student
                                                </ReactLink>
                                            </NavLink>
                                        </>
                                        :
                                        null}
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <NavLink>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    {/* <Avatar
                                        size={'sm'}
                                        // src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        src={Profile}
                                    /> */}
                                    <Image
                                        src={Profile}
                                        // alt={username}
                                        boxSize="30px"
                                        borderRadius="full"
                                    />
                                </MenuButton>
                                    </NavLink>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        {/* <Avatar
                                            size={'2xl'}
                                            src={Profile}
                                        /> */}
                                        

                                            <Image
                                                src={Profile}
                                                // alt={username}
                                                boxSize="100px"
                                                objectFit={'cover'}
                                                borderRadius="full"
                                            />
                                        
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Ramadhan Wahyu</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Frontend Web Development</MenuItem>
                                    <MenuItem>FE4799827</MenuItem>

                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
export default NavBar;