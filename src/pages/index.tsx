import * as React from 'react';
import Routes from '../components/dynamic-router';

interface AppProps {}

function App({}: React.Props<AppProps>) {
  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
