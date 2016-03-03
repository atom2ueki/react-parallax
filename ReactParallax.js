
/*!
 * React Parallax
 * Version - 1.0.0
 * Licensed under the MIT license
 *
 * Copyright (c) 2016 Tony Li
 */

"use strict";

import React from 'react';
import classNames from 'classnames'

class ReactParallax extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {

  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      <div>
        <img src={this.state.url} />
      </div>
    );
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }
}

ReactDrawer.propTypes = {
  
};

export default ReactParallax
