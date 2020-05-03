import styled from 'styled-components';

export const Tabs = styled.SafeAreaView`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120px;
    flex-direction: row;
    justify-content: space-around;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: #fff;
`;

export const Tab = styled.TouchableOpacity`
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;

export const TextTab = styled.Text`
    color: ${props => props.color || '#777'} ;
    font-size: 12px;
`;