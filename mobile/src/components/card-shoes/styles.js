import styled from 'styled-components';

export const Product = styled.View`
    width: 160px;
    height: 63%;
    margin: 10px;
    background: #fff;
    border-radius: 20px;
`;

export const Image = styled.Image`
    width: 150px;
    height: 130px;
    margin: 5px auto 0;
    border-radius: 20px;
`;

export const Name = styled.Text`
  margin: 10px 10px 5px;
  color: #444;
`;

export const Colors = styled.View`
    background: #ededed;
    margin: 0 8px;
    padding: 5px;
    max-width: 50%;
    border-radius: 10px;
`;

export const TextColors = styled.Text`
    margin: 0 auto;
    font-size: 12px;
    color: #888;
`;

export const BottomProduct = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 20px auto 0;
`;

export const Price = styled.Text`
    font-weight: bold;
`;

export const AddToCard = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-width: 2px;
    border-color: #f0f0f0;
    border-radius: 10px;
`;
