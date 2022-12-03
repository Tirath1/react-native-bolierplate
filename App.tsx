import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';
import RootNavigator from './src/Router/RootNavigator';

interface Props {}
const App: React.FC<Props> = () => {
  return (
    <Provider store={Store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
