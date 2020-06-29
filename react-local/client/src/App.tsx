import React, { FC } from 'react';
import Hello from './Hello';

interface AppProps {
  language: string;
}

const App: FC<AppProps> = (props) => (
  <>
    <h1>Welcome to Create {props.language} App!</h1>
    <Hello />
  </>
);

export default App;
