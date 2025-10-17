// routing-level components
import React from 'react';
import Demo from '../../components/demo';
import { Link } from 'react-router-dom';

export default class HomeView extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <p>Welcome to the <b>Home View</b>!</p>
                <Demo demoText='hehe' />
                <Link to="/about">Go to About Page</Link>
            </div>
        )
    }
}