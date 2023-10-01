import React, { Component } from 'react';
import { LayoutComponent } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
      return (
            <LayoutComponent/>
    );
  }
}
