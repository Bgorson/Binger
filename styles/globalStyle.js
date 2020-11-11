import { StyleSheet } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const colors = {
  charcoal: '#264653',
  green: '#2A9D8F',
  orange: '#E9C46A',
  darkOrange: '#F4A261',
  redishOrange: '#E76F51',
};

const globalStyles = StyleSheet.create({
  backGround: {
    backgroundColor: colors.green,
  },
});
export default globalStyles;
