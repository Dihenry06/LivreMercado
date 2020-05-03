import styled from 'styled-components';

import { getStatusBarHeight } from 'react-native-status-bar-height'

const height = getStatusBarHeight();

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    flex: 4;
`;

export const PurpleHeader = styled.View`
    padding-top: ${height}px;
    background: #735CDD;
    height: 60%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 20px 40px 0;
`;

export const ProductsHeader = styled.View`
    background: #FFF;
    height: 45%;
    width: 80%;
    margin: -90px auto 0;
    border-radius: 30px;
`;

export const SearchInput = styled.TextInput`
    background: #fff;
    width: 50%;
    border-radius: 10px;
    padding: 15px 20px;
`;

export const ShadowProductHeader = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
};

export const Body = styled.View`
    flex: 5;
`;