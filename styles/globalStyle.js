import { StyleSheet } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  titleText: {
    backgroundColor: 'red',
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
