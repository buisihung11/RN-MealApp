import React from 'react';
import { StyleSheet, Text } from 'react-native';

const VTTExt = ({ children, customStyle, ...rest }) => (
  <Text style={[styles.vt, customStyle]} {...rest}>
    {children}
  </Text>
);

export default VTTExt;

const styles = StyleSheet.create({
  vt: {
    fontFamily: 'vt',
    fontSize: 20,
  },
});
