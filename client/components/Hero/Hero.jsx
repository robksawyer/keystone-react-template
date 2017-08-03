import React, { PropTypes } from 'react';
import styles from './Hero.css';


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
      {children}
    </Tag>
  );
}

Hero.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default'])
};

Hero.defaultProps = {
  tagName: 'div',
  className: '',
  variant: 'default'
};


export default Hero;