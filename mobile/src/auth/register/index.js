import React from 'react';

import { Logo } from '~/styled';

import {
    Container,
    Texts,
    Bold,
    Light,
    Inputs,
    Input,
    Label,
    TextField,
    TextInput,
    DivButton,
    Button,
    TextButton
} from './styles';

export default function Register() {
    return (
        <Container>
            <Logo flex="1" margin="30px 0 0">livreMercado</Logo>

            <Texts>
                <Bold>Registre-se</Bold>
                <Light>Junte a maior plataforma de vendas online, e fique por dentro de todas as novidades</Light>
            </Texts>

            <Inputs>
                <Input>
                    <Label>
                        Usuário
                    </Label>

                    <TextField>
                        <TextInput placeholder={'Escreva um usuário'} />
                    </TextField>
                </Input>

                <Input>
                    <Label>
                        E-mail
                    </Label>

                    <TextField>
                        <TextInput placeholder={'Informe um e-mail'} />
                    </TextField>
                </Input>

                <Input>
                    <Label>
                        Senha
                    </Label>

                    <TextField>
                        <TextInput placeholder={'Digite uma senha'} />
                    </TextField>
                </Input>

            </Inputs>

            <DivButton>
                <Button>
                    <TextButton>
                        Continuar
                    </TextButton>
                </Button>
            </DivButton>

        </Container>
    );
}