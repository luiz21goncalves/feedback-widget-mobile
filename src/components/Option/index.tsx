import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text,
} from 'react-native';

import { styles } from './styles';

interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option(props: OptionProps) {
  const { title, image, ...attrs } = props;

  return (
    <TouchableOpacity style={styles.container} {...attrs}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
