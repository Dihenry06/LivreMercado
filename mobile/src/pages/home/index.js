import React from 'react';

import {
  Container,
  Header,
  PurpleHeader,
  SearchInput,
  ProductsHeader,
  ShadowProductHeader,
  Body,
  HeaderBody,
  TitleBody,
  ButtonBody,
  TextButtonBody,
  List,
  ItemList
} from './styles';

import { Logo } from '~/styled'

export default function Home() {
  return (
    <Container>
      <Header>
        <PurpleHeader>
          <Logo size="20px" color="#fff">Shopping</Logo>
          <SearchInput placeholder="Pesquisar" />
        </PurpleHeader>

        <ProductsHeader style={ShadowProductHeader}>

        </ProductsHeader>
      </Header>

      <Body>
        <HeaderBody>
          <TitleBody>Novidades</TitleBody>
          <ButtonBody>
            <TextButtonBody>
              Ver todos
            </TextButtonBody>
          </ButtonBody>
        </HeaderBody>

        <List horizontal={true}>
          {
            [1, 2, 3, 4].map(() => {
              return (
                <ItemList>

                </ItemList>
              )
            })
          }
        </List>

      </Body>

    </Container>
  )
};