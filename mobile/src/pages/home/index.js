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
  ProductList,
  ActionsHeader,
} from './styles';

import { Logo } from '~/styled'

import CardShoes from '~/components/card-shoes';

import ButtonAction from '~/components/actions';
import actions from './actions';

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

        <ActionsHeader>
          {
            actions.map(action => <ButtonAction action={action} />)
          }
        </ActionsHeader>

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

        <ProductList horizontal={true}>
          {
            [1, 2, 3, 4].map(() => <CardShoes />)
          }
        </ProductList>

      </Body>

    </Container>
  )
};