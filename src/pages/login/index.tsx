import React from 'react'
import Link from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    Image,
    ListIcon,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'
import { NextPageContext } from 'next'

import { CompoundLayout, FormLayout, SubmitButton } from '@components/Layout'
import { FormPageHeader } from '@components/Body'
import { InputField, PasswordField } from '@components/Fields'
import { useForm } from 'react-hook-form'
import * as Auth from '@utils/user'

export default function Page(): JSX.Element {
    // const { register, handleSubmit } = useForm()

    const onLoginWithMetaMask = async (_data: any): Promise<void> => {
        try {
            alert("triggered")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <FormLayout>
            {/* <FormPageHeader
                formHeading="Login with MetaMask"
                formSubHeading="Login to your account to access your profile 😀"
            /> */}

            <Center py={6}>
                <Box
                    maxW={'350px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}
                >
                    <Stack
                        textAlign={'center'}
                        p={6}
                        color={useColorModeValue('gray.800', 'white')}
                        align={'center'}
                    >
                        <Text
                            fontSize={'sm'}
                            fontWeight={500}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            px={3}
                            mb={2}
                            color={'blue.500'}
                            rounded={'full'}
                        >
                            Login with MetaMask
                        </Text>
                        <Center>
                            <Image w="120px" h="120px" src="/metamask.svg" alt="MetaMask" />
                        </Center>
                    </Stack>

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <Button
                            mt={5}
                            w={'full'}
                            colorScheme="green"
                            fontWeight="700"
                            rightIcon={<ArrowForwardIcon />}
                            justifyContent={'space-between'}
                            color={'white'}
                            borderRadius="4px"
                            size="lg"
                            onClick={onLoginWithMetaMask}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            _hover={{
                                bg: 'green.400',
                            }}
                            _focus={{
                                bg: 'green.400',
                            }}
                        >
                            Authorize Now
                        </Button>
                    </Box>
                </Box>
            </Center>
        </FormLayout>
    )
}

// export async function getServerSideProps(ctx: NextPageContext) {
// Page.getInitialProps = async (ctx: NextPageContext) => {

//     if (Auth.redirectIfAuthenticated(ctx, '/')) {
//         return {};
//     }

//     return {}

// }
