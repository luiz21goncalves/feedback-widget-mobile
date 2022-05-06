import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from 'react-native';

import { theme } from '../../theme';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  isLoading: boolean;
}

export function Button(props: ButtonProps) {
  const { isLoading, ...attrs } = props;

  return (
    <TouchableOpacity style={styles.container} {...attrs}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.label}>Enviar feedback</Text>
      )}
    </TouchableOpacity>
  );
}
