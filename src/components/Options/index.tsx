import React from 'react';
import { Text, View } from 'react-native';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { FeedbackType } from '../Form';
import { Option } from '../Option';
import { styles } from './styles';

interface OptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options(props: OptionsProps) {
  const { onFeedbackTypeChanged } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, { image, title }]) => (
          <Option
            key={key}
            image={image}
            title={title}
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
