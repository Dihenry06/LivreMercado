import styled from 'styled-components';

import { getStatusBarHeight } from 'react-native-status-bar-height'

const height = getStatusBarHeight();

export const Container = styled.View`
    flex: 1;
    background: #f0f0f0;
    padding: ${height}px;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    color: #735CDD;
`;