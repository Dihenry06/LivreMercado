import styled from 'styled-components';

import { getStatusBarHeight } from 'react-native-status-bar-height';

const height = getStatusBarHeight();

export const Container = styled.View` 
    flex: 1;
`;

export const Header = styled.View`
    flex: 1.5;
    padding-top: ${height}px;
    background: #735CDD;
`;

export const Drawer = styled.View`
    flex: 6;
`;

export const DrawerItem = styled.View`

`;

export const DrawerItemText = styled.Text`

`;

export const User = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;

export const ViewImage = styled.View`
    width: 30%;
    padding-left: 15px;
`;

export const ImageUser = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 200px;
`;

export const InfoUser = styled.View`    
    margin: 10px 0;
    flex-direction: column;
`;

export const NameUser = styled.Text`
    color: #FFF;
    font-weight:300;   
`;

export const PointsUser = styled.Text`
    color: #FFF;
    font-weight:800;
    margin: 5px 0;
`;

export const LogoutButton = styled.TouchableOpacity`
    background: #fff;
    height: 40px;
    margin: auto;
    width: 80%;
    border-radius: 5px;
`;

export const TextButton = styled.Text`
    color: #323232;
    font-weight: 800;
    margin: auto;
`;