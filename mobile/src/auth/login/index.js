import React from 'react';

import { Logo } from '~/styled';

import { StatusBar } from 'react-native';

import {
    Container,
    PurpleDiv,
    DivLogin,
    TitleLogin,
    Input,
    Label,
    TextField,
    IconField,
    TextInput,
    Button,
    TextButton,
    ForgotPassword,
    TextForgotPassword,
    Icon,
    TextButtonAuth,
    ButtonAuth,
    IconAuth,
    Register,
    TextRegister,
    TextBoldRegister,
    Buttons
} from './styles';

export default function Login({ navigation }) {

    function toRegister() {
        navigation.navigate('Register');
    };

    return (
        <Container>
            <StatusBar backgroundColor="#735CDD" />

            <PurpleDiv>
                <Logo size="30px" color="#fff">
                    livreMercado
                </Logo>
            </PurpleDiv>

            <DivLogin>
                <TitleLogin>
                    Entrar
                </TitleLogin>

                <Input>
                    <Label>
                        Informe seu e-mail
                    </Label>

                    <TextField>
                        <IconField>
                            <Icon source={{}} />
                        </IconField>
                        <TextInput placeholder={'E-mail'}>

                        </TextInput>
                    </TextField>
                </Input>

                <Input>
                    <Label>
                        Digite sua senha
                    </Label>

                    <TextField>
                        <IconField>
                            <Icon source={{}} />
                        </IconField>
                        <TextInput placeholder={'Senha'}>

                        </TextInput>
                    </TextField>
                </Input>

                <ForgotPassword>
                    <TextForgotPassword>
                        Esqueceu sua senha ?
                    </TextForgotPassword>
                </ForgotPassword>

                <Button>
                    <TextButton>
                        Entrar
                    </TextButton>
                </Button>
            </DivLogin>

            <Buttons>

                <ButtonAuth>
                    <IconAuth source={{ uri: 'https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Facebook-512.png' }} />
                    <TextButtonAuth>
                        Registrar com Facebook
                </TextButtonAuth>
                </ButtonAuth>

                <ButtonAuth>
                    <IconAuth source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' }} />
                    <TextButtonAuth>
                        Registrar com Google
                </TextButtonAuth>
                </ButtonAuth>

                <Register onPress={toRegister}>
                    <TextRegister>
                        Não possui conta ?
                </TextRegister>
                    <TextBoldRegister>
                        Registre-se
                </TextBoldRegister>
                </Register>

            </Buttons>


        </Container>
    );
}