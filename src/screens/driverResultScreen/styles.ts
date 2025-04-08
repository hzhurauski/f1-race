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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#007AFF',
    borderRadius: 4,
    minWidth: 80,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pageText: {
    fontWeight: 'bold',
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
