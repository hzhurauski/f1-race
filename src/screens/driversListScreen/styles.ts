import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  loader: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 16,
  },
  limitSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    gap: 16,
  },
  limitOption: {
    padding: 8,
    color: '#007AFF',
  },
  activeLimit: {
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
});
