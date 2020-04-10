import * as React from 'react';
import Hello from './Hello';

interface AppProps {
  language: string;
}

const App = (props: AppProps) => (
  <>
    <h1>Welcome to Create {props.language} App!</h1>
    <Hello />
  </>
);

export default App;
