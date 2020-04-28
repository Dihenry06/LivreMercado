import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const heightStatusBar = getStatusBarHeight(true);

export const Container = styled.View`
    padding: ${heightStatusBar}px 20px;
    background-color: #fff;
    flex: 1;
`;

export const Logo = styled.Text`
    flex: 1;
    margin: 30px 0 0;
    font-family: 'SharpGrotesk-SemiBold25';
    color: #735CDD;
    font-size: 16px;
`;

export const Texts = styled.View`  
    flex: 2;  
    flex-direction: column;
`;

export const Bold = styled.Text`
    font-size: 40px;
    font-family: 'Moderat-Bold';
`;

export const Light = styled.Text`
    margin-top: 5px;
    font-size: 14px;
    color: #888;
    font-family: 'Moderat-Regular';
`;

export const Inputs = styled.View`
    flex: 5;
`;

export const Input = styled.View`
    flex-direction: column;
    margin: 15px 0px;
`;

export const Label = styled.Text`
    color: #999;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
`;

export const TextField = styled.View`
    margin: 3px 0;
    border-width: 2px;
    border-color: #dbdbdb;
    border-radius: 3px;
    flex-direction: row;
`;

export const IconField = styled.View`
    border-right-width: 2px;
    border-right-color: #e6e6e6;
    width: 15%;
`;

export const Icon = styled.Image`

`;

export const TextInput = styled.TextInput`
    width: 85%;
    height: 40px;
    padding: 0 10px;
`;

export const DivButton = styled.View`
    flex: 5;
    margin-top: 30px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #735CDD;
    border-radius: 3px;
    height: 50px;
`;

export const TextButton = styled.Text`
    color: #fff;
    margin: auto;
    font-size: 18px;
    font-family: 'Moderat-Bold';
`;