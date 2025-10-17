import React from 'react';
import './index.less';
import ReactSVG from './assets/react.svg';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <img src={ReactSVG} alt="React Logo" />
        <h1>Hello, React!</h1>
        <RouterProvider router={router} />
      </div>
    );
  }
}
