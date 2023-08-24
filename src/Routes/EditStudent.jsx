import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    useToast,
    Center,
    useColorModeValue,
    Image,
    Spinner
} from '@chakra-ui/react';
import { DatePicker } from 'chakra-ui-date-input'
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const PhotoProfile = ({ image }) => {
    const IMAGE = image;
    // console.log(image);
    return (
        <Center py={7}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 3,
                        left: 0,
                        backgroundImage: `url(${IMAGE})`,
                        filter: 'blur(11px)',
                        zIndex: -1,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(17px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={IMAGE}
                    />
                </Box>
            </Box>
        </Center>
    );
}

const EditForm = ({ student, handleChange, handleDateChange, handleSubmit }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); 
    };
    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <Flex>
                    <FormControl mt='2%' mr="5%" >
                        <FormLabel htmlFor="fullname" fontWeight={'normal'}>
                            Fullname
                        </FormLabel>
                        <Input
                            data-testid="name"
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            value={student.fullname}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                        />
                    </FormControl>
                    <FormControl mt='2%'>
                        <FormLabel htmlFor="gender" fontWeight={'normal'}>
                            Gender
                        </FormLabel>
                        <Select
                            id="input-gender"
                            data-testid="gender"
                            name="gender"
                            placeholder='Select'
                            value={student.gender}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                        >
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </Select>
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl mt='2%' mr="5%">
                        <FormLabel htmlFor="phoneNumber" fontWeight={'normal'}>
                            Phone Number
                        </FormLabel>
                        <InputGroup>
                            <InputLeftAddon children='+62' />
                            <Input
                                type="text"
                                id="input-phone"
                                data-testid="phoneNumber"
                                name="phoneNumber"
                                placeholder='Number'
                                value={student.phoneNumber}
                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt='2%'>
                        <FormLabel htmlFor="programStudy" fontWeight={'normal'}>
                            Program Study
                        </FormLabel>
                        <Select
                            id="input-prody"
                            data-testid="prody"
                            name="programStudy"
                            // placeholder='Select'
                            defaultValue={student.programStudy}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                        >
                            <option value="Ekonomi">Ekonomi</option>
                            <option value="Manajemen">Manajemen</option>
                            <option value="Akuntansi">Akuntansi</option>
                            <option value="Administrasi Publik">Administrasi Publik</option>
                            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                            <option value="Hubungan Internasional">Hubungan Internasional</option>
                            <option value="Teknik Sipil">Teknik Sipil</option>
                            <option value="Arsitektur">Arsitektur</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Informatika">Informatika</option>
                        </Select>
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl mt='2%' mr="5%">
                        <FormLabel htmlFor="profilPicture" fontWeight={'normal'}>
                            Profil Picture
                        </FormLabel>
                        <Input
                            disabled
                            type="text"
                            name="profilePicture"
                            placeholder="Profile Picture"
                            defaultValue={student.profilePicture}
                        />
                    </FormControl>
                    {/* <FormControl mt='2%'>
                                                <FormLabel htmlFor="birthDate" fontWeight={'normal'}>
                                                    Birth Date
                                                </FormLabel>
                                                <Input
                                                    type="text"
                                                    id="input-date"
                                                    data-testid="date"
                                                    name="birthDate"
                                                    placeholder='Date picker placeholder'
                                                    value={student.birthDate}
                                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                />
                                            </FormControl> */}
                    <FormControl mt='2%'>
                        <FormLabel htmlFor="birthDate" fontWeight={'normal'}>
                            Birth Date
                        </FormLabel>
                        <DatePicker
                            // type="date"
                            id="input-date"
                            data-testid="date"
                            name="birthDate"
                            placeholder='Date'
                            defaultValue={student.birthDate}
                            onChange={handleDateChange}
                        />
                    </FormControl>
                </Flex>
                <FormControl mt="2%">
                    <FormLabel htmlFor="address" fontWeight={'normal'}>
                        Address
                    </FormLabel>
                    <Textarea
                        rows={4}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{
                            sm: 'sm',
                        }}
                        name="address"
                        type="text"
                        id="input-address"
                        data-testid="address"
                        placeholder="Address"
                        value={student.address}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <Button
                        onClick={goBack}
                        colorScheme="red"
                        variant="outline"
                        w='7rem'
                        mt='3'
                        mr='1%'>
                        Back
                    </Button>
                    <Button
                        colorScheme="cyan"
                        variant="solid"
                        id="add-btn"
                        data-testid="edit-btn"
                        type="submit"
                        w='7rem'
                        mt='3'>
                        Submit
                    </Button>
                </FormControl>
            </FormControl>
        </form>
    )
};

const EditStudent = () => {
    const toast = useToast();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    let navigate = useNavigate();
    const bgColor = useColorModeValue('white', 'gray.800');
    const [student, setStudent] = useState({
        fullname: '',
        gender: '',
        phoneNumber: '',
        birthDate: '',
        address: '',
        profilePicture: '',
        programStudy: '',
    });

    useEffect(() => {
        const fetchStudent = async (id) => {
            try {
                const response = await fetch(`https://portfolio.rwahyus.online/students/${id}`);
                // const response = await fetch(`http://46.137.228.97:5001/students/${id}`);
                const dataFetch = await response.json();
                const data = dataFetch.data.student
                console.log(dataFetch);
                console.log(dataFetch.data.student);
                setStudent((prevState) => ({
                    ...prevState,
                    fullname: data.fullname,
                    birthDate: data.birthDate,
                    gender: data.gender,
                    programStudy: data.programStudy,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    profilePicture: data.profilePicture,
                }));
                setIsLoading(!isLoading)
            } catch (error) {
                console.log(error);
            }
        };
        fetchStudent(id);
    }, [id]);

    const handleChange = (name, value) => {
        setStudent({ ...student, [name]: value });
    };

    const handleDateChange = (date) => {
        setStudent({ ...student, ['birthDate']: date });
        // handleChange('birthDate', date);
    };

    const handleEditData = async (e) => {
        setIsLoading(!isLoading)
        e.preventDefault();

        const faculties = {
            "Ekonomi": "Fakultas Ekonomi",
            "Manajemen": "Fakultas Ekonomi",
            "Akuntansi": "Fakultas Ekonomi",
            "Administrasi Publik": "Fakultas Ilmu Sosial dan Politik",
            "Administrasi Bisnis": "Fakultas Ilmu Sosial dan Politik",
            "Hubungan Internasional": "Fakultas Ilmu Sosial dan Politik",
            "Teknik Sipil": "Fakultas Teknik",
            "Arsitektur": "Fakultas Teknik",
            "Matematika": "Fakultas Teknologi Informasi dan Sains",
            "Fisika": "Fakultas Teknologi Informasi dan Sains",
            "Informatika": "Fakultas Teknologi Informasi dan Sains"
        };
        const dataStudentUpdate = {
            ...student,
            faculty: faculties[student.programStudy],
        }
        try {
            await fetch(`https://portfolio.rwahyus.online/students/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataStudentUpdate),
            });
            toast({
                position: 'top',
                title: 'Success',
                description: "Data Edited Successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setIsLoading(!isLoading)
            navigate("/students");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NavBar data-testid="name" screenName={'edit'} />
            {isLoading ?
                // <p>Loading ...</p>
                (<LoadingSpinner />)
                :
                (
                    <Box h='100vh' my={{ base: 3, md: 7 }}  >
                        <Flex height="100%" alignItems="center" justify="center">
                            <Box
                                borderWidth="1px"
                                rounded="lg"
                                shadow="md"
                                w={{ base: '95%', md: '80%', lg: '60%' }}
                                p={{ base: 4, md: 6 }}
                            >
                                <Heading w="100%" textAlign='center' fontWeight="bold" mb="2%">
                                    Edit Data
                                </Heading>
                                <PhotoProfile image={student.profilePicture} />
                                <EditForm
                                    student={student}
                                    handleChange={handleChange}
                                    handleDateChange={handleDateChange}
                                    handleSubmit={handleEditData}
                                />
                            </Box>
                        </Flex>
                    </Box>
                )
            }
            <Footer />
        </>
    );
};

export default EditStudent;
