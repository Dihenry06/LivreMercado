import styled from 'styled-components';

export const Action = styled.View`
    align-items: center;
    height: 100%;
`;

export const ActionButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: ${props => props.backgroundColor || 'rgba(0,0,0,0.1)'};
    border-radius: 10px;
`;

export const ActionText = styled.Text`
    color: rgba(0,0,0,0.6);
    margin-top: 5px;
    font-weight: 500;
    font-size: 13px;
`;