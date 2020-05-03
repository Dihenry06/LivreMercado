import React from 'react';

import {
  Container,
  Header,
  PurpleHeader,
  SearchInput,
  ProductsHeader,
  ShadowProductHeader,
  Body,
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

      </Body>

    </Container>
  )
};