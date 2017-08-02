import React, {Component, PropTypes} from 'react';


export default class Home extends Component {

  constructor() {
    super()
    this.state = { filter: '' }
  }

  render() {
    return (
      <section className="container home">Hello World</section>
    );
  }

}
