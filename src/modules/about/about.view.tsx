import React from 'react';
import { Link } from 'react-router-dom';
import Demo from '../../components/demo';

export default class AboutView extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <p>
          This is the <b>About View</b> !
        </p>
        <Demo demoText="Hello from About View!" />
        <Link to="/">Go back to Home Page</Link>
      </div>
    );
  }
}
