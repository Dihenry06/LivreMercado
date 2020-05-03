import React from 'react';

import {
  Action,
  ActionButton,
  ActionText
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

export default function ActionComponent({ action }) {

  return (
    <Action>
      <ActionButton backgroundColor={action.backgroundColor}>
        <Icon size={30} color={action.color} name={action.icon} />
      </ActionButton>
      <ActionText color={action.color}>{action.label}</ActionText>
    </Action>
  );
};