// routing-level components
import React from 'react';
import Demo from '../../components/demo';
import { Link } from 'react-router-dom';
import type { HomeState } from '../../commen/interface/home';

export default class HomeView extends React.Component<{}, HomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            homeMessage: 'Hello from Home View State!'
        }
    }

    private handleChangeMessage = (): void => {
        this.setState({
            homeMessage: `Home View State Message ${Math.random()}`
        });
    }

    render(): React.ReactNode {
        return (
            <div>
                <p>Welcome to the <b>Home View</b>!</p>
                <Demo demoText={this.state.homeMessage} />
                <p>
                    <button onClick={this.handleChangeMessage}>click to change message</button>
                </p>
                <Link to="/about">Go to About Page</Link>
            </div>
        )
    }
}