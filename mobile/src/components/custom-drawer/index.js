import React from 'react';

import {
    Container,
    Header,
    Drawer,
    DrawerItem,
    DrawerItemText,
    User,
    ViewImage,
    ImageUser,
    InfoUser,
    NameUser,
    PointsUser,
    LogoutButton,
    TextButton
} from './styles';

export default function DrawerCustom(props) {
    const { routes } = props.state;

    return (
        <Container>

            <Header>
                <User>
                    <ViewImage>
                        <ImageUser source={{ uri: 'https://scontent.fcgh43-1.fna.fbcdn.net/v/t1.0-1/94485161_3073752806054416_7529152771686137856_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeE5R4s7_j48S6v8134jc4O1XJ4osZd4MNlcniixl3gw2XaT45WSWYH1DY_QJDsCEDZvx2W3ZYn6jCJGNu-zMBhj&_nc_ohc=pousuLWlwg4AX-apuBp&_nc_ht=scontent.fcgh43-1.fna&oh=148ffbe8ee2c414147a9f2f8c99c00c4&oe=5ED54B90' }} />
                    </ViewImage>
                    <InfoUser>
                        <NameUser>Olá Diogo</NameUser>
                        <PointsUser>Nível 2 - Mercado Pontos</PointsUser>
                    </InfoUser>
                </User>
                <LogoutButton>
                    <TextButton>
                        Minha conta
                    </TextButton>
                </LogoutButton>
            </Header>

            <Drawer>
                {
                    (routes || []).map(route => {
                        return (
                            <DrawerItem>
                                <DrawerItemText>{route.name}</DrawerItemText>
                            </DrawerItem>
                        )
                    })
                }
            </Drawer>
        </Container>
    );
}