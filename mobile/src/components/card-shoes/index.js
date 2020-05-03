import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {
  Product,
  Image,
  Name,
  Colors,
  TextColors,

  BottomProduct,
  Price,
  AddToCard
} from './styles';

export default function CardShoes() {
  return (
    <Product>
      <Image source={{ uri: 'https://sneakersbr.co/wp-content/uploads/2018/03/nike-air-max-97-soft-pink-921733-600-5.jpg' }} />
      <Name>Nike Air Max 2090</Name>
      <Colors>
        <TextColors>7 cores</TextColors>
      </Colors>

      <BottomProduct>
        <Price>R$192,00</Price>

        <AddToCard>
          <Icon name="plus" size={20} />
        </AddToCard>

      </BottomProduct>
    </Product>
  )
};