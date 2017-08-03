import React, { PropTypes } from 'react';
import styles from './Hero.css';
import {
  Container, Header, Button, Icon
} from 'semantic-ui-react';


export const Hero = (props) => {
  const {
    tagName:Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  return (
    <Tag className={`hero hero--${variant} ${className}`} {...attrs}>
      <Container text>
        <Header
          as='h1'
          content='Keystone React Template'
          inverted
          style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
        />
        <Header
          as='h2'
          content='Change this content.'
          inverted
          style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
      {children}
    </Tag>
  );
}

Hero.defaultProps = {
  tagName: 'div',
  className: '',
  variant: 'default'
};

export default Hero;
