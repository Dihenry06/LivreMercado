import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    position: relative;
    background: #f2f2f2;
`;

export const PurpleDiv = styled.View`
    flex: 4;
    background: #735CDD;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const DivLogin = styled.View`
    flex: 6.5;
    background: #FFFFFF;
    margin: -10% auto 20px;
    width: 90%;
    border-radius: 10px;
    padding: 10px 20px;
`;

export const Buttons = styled.View`
    flex: 4;
`;

export const TextPurpleDiv = styled.Text`
    margin: auto;
    font-size: 30px;
    color: #fff;
    font-family: 'SharpGrotesk-SemiBold25';
`;

export const TitleLogin = styled.Text`
    flex: 1.5;
    margin: 10px 0 0;
    font-size: 25px;
    font-weight: 900;
    color: #444;
    font-family: 'SharpGrotesk-SemiBold25';
`;

export const Input = styled.View`
    flex: 2;
    flex-direction: column;
    margin: 5px 0px;
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
    border-right-color: #dbdbdb;
    width: 15%;
`;

export const Icon = styled.Image`

`;

export const TextInput = styled.TextInput`
    width: 85%;
    height: 40px;
    padding: 0 10px;
`;

export const Button = styled.TouchableOpacity`
    flex: 0.5;
    width: 100%;
    padding: 15px 20px;
    background: #735CDD;
    border-radius: 3px;
`;

export const TextButton = styled.Text`
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: bold;
`;

export const ForgotPassword = styled.TouchableOpacity`
    flex: 2;
    width: 100%;
    height: 40px;
    justify-content: center;
`;

export const TextForgotPassword = styled.Text`
    color: #323232;
    font-weight: 600;
`;

export const ButtonAuth = styled.TouchableOpacity`
    margin: 10px auto;
    border-width: 2px;
    border-color: #e6e6e6;
    width: 80%;
    background: #fff;
    padding: 10px 0;
    flex-direction: row;
    align-items: center;
`;

export const TextButtonAuth = styled.Text`
    color: #777;
    font-weight: bold;
`;

export const IconAuth = styled.Image`
    width: 20px;
    height: 20px;
    margin: 0 20px;
`;

export const Register = styled.TouchableOpacity`
    margin: 20px auto 0;
    flex-direction: row;
`;

export const TextRegister = styled.Text`
    color: #444;
`;

export const TextBoldRegister = styled.Text`
    margin: 0 0 0 5px;
    font-weight: bold;
    color: #735CDD;
`