/**
 * Created by NL on 10/31/23.
 */
import React from 'react';
import {
  type StyleProp,
  StyleSheet,
  Text as RNText,
  type TextProps as RNTextProps,
  type TextStyle,
} from 'react-native';

type TextPros = {
  color: string;
  style: StyleProp<TextStyle>;
} & RNTextProps;

export const Text: React.FC<TextPros> = ({
  color,
  style,
  children,
  ...props
}) => {
  return (
    <RNText
      style={StyleSheet.flatten([
        {
          color: color ? color : 'black',
        },
        style,
      ])}
      {...props}
    >
      {children}
    </RNText>
  );
};
