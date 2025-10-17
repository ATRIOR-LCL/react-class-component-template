import React from 'react';
import type { DemoProps } from '../assets/commen/interface/demo';

export default class Demo extends React.Component<DemoProps> {
  demoMessage!: string;
  constructor(props: DemoProps) {
    super(props);
    this.demoMessage = this.props.demoText;
  }
  render(): React.ReactNode {
    return (
      <div>
        <p>
          DemoComponent: Message from Parent Component is <b>{this.demoMessage}</b>
        </p>
      </div>
    );
  }
}
