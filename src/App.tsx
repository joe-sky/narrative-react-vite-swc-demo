import { Fragment, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { If, Else, For } from '@narrative/control-flow';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Narrative</h1>
      <div className="card">
        <If when={count < 10}>
          <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
          <Else>Click more than 10 times</Else>
        </If>
        <p>
          Edit <code>src/App.tsx</code> and{' '}
          <For of={['save', 'to', 'test', 'HMR', 'updates']}>
            {(item, { index }, arr) => (
              <Fragment key={index}>
                {item}
                <If when={index < arr.length - 1}> </If>
              </Fragment>
            )}
          </For>
          .
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
