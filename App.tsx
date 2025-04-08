import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/providers/store';
import { DriversListScreen } from './src/screens/driversListScreen';

export default function App() {
  return (
    <Provider store={store}>
      asdasdsad
      <DriversListScreen />
    </Provider>
  );
}
