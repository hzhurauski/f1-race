import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/providers/store';
import { Navigation } from 'app/navigation';

// The suggested api has expired. It was decided to use a new version - “http://api.jolpi.ca/ergast” - in its place

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
