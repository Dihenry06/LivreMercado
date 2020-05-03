import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import itemsMenu from './items';

import {
    Tabs,
    Tab,
    TextTab
} from './styles';

export default function TabBar(props) {
    const { routes, index } = props.tabs.state;

    function changeRoute(route) {
        const { navigation } = props.tabs;
        navigation.navigate(route.name);
    };

    return (
        <Tabs>
            {
                (routes || []).map((routeTab, key) => {
                    const item = itemsMenu[routeTab.name] || {};
                    return (
                        <Tab onPress={() => changeRoute(routeTab)}>
                            <Icon color={key == index ? '#735CDD' : '#777'} name={item.icon} size={30} />
                            <TextTab color={key == index && '#735CDD'}>{item.label}</TextTab>
                        </Tab>
                    );
                })
            }
        </Tabs>
    )
};