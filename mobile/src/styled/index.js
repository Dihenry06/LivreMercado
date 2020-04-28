import styled from 'styled-components';

import { Platform } from 'react-native';

const fontLogo = Platform.select({
    ios: 'SharpGrotesk-SemiBold25',
    android: 'sharpgrotesk_semibold25'
});

export const Logo = styled.Text`
    font-family: ${fontLogo};

    /* required */
    color: ${props => props.color || '#735CDD'};
    font-size: ${props => props.size || '16px'};
    margin: ${props => props.margin || 'auto'};

    /* not required */
    ${props => props.flex && {
        flex: props.flex
    }}
`;