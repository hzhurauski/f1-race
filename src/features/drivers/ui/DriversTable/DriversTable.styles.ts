import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    flex: 2,
    fontSize: 14,
    paddingHorizontal: 4,
  },
  iconCell: {
    flex: 1,
    alignItems: 'center',
  },
});
