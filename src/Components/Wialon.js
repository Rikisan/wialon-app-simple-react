import React, { Component } from 'react';

export default class Wialon extends Component {
  shouldComponentUpdate() {
    // component will never update
    return false;
  }

  componentWillReceiveProps(nextProps) {
    // though never re-rendered, the component will receive new props here
  }

  componentDidMount() {
    // component reaching DOM by setting ref attribute in jsx
  }
  render() {
    return <div />;
  }
}
