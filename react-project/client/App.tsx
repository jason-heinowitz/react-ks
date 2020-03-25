import * as React from 'react';
import Hello from './Hello';

interface AppProps {
  language: String;
}

const App = (props: AppProps) => {
  return (
    <>
      <h1>Welcome to Create {props.language} App!</h1>
      <Hello />
    </>
  );
};

export default App;
