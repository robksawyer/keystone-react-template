import React from 'react';
import Hero from './Hero.jsx';

export default [{
  name: "default",
  component: (
    <Hero>
      Hello World
    </Hero>
  ),
  test(t, component) {
    t.equal(component.is('div'), true, 'tag name');
    t.equal(component.is('.hero'), true, 'tag class');
    t.equal(component.text(), 'Hello World', 'text');
    t.end();
  }
}];
