import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  emptyContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  raceContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
  },
  raceHeader: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  seasonText: {
    fontSize: 12,
    color: '#666',
  },
  raceNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  roundText: {
    fontSize: 12,
    color: '#666',
  },
  resultRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  resultCell: {
    width: '50%',
    flexDirection: 'row',
    marginBottom: 4,
  },
  resultLabel: {
    fontWeight: 'bold',
    marginRight: 4,
    width: 60,
  },
  resultValue: {
    flex: 1,
  },
});
