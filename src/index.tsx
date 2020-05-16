import React from 'react';
import { render } from 'react-dom';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const numState = atom({
  key: 'numState',
  default: 0,
});

const squareState = selector({
  key: 'squareState',
  get: ({ get }: { get: Function }) => get(numState) ** 2,
});

const Counter = () => {
  const [number, setNumber] = useRecoilState(numState);
  return <button onClick={() => setNumber(number + 1)}>{number}</button>;
};

const Display = () => {
  const number = useRecoilValue(numState);
  return <div>{number}</div>;
};

const Square = () => {
  const squareNumber = useRecoilValue(squareState);
  return <div>Square: {squareNumber}</div>;
};

import './index.css';

import Home from './views/home/home';

render(
  <RecoilRoot>
    <>
      <Home />
      <Display />
      <Counter />
      <Square />
    </>
  </RecoilRoot>,
  document.getElementById('root'),
);
