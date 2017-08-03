import React, { PropTypes } from 'react';
import styles from './{{name}}.css';
import {
  Container
} from 'semantic-ui-react';

export const {{name}} = (props) => {
  const {
    tagName:Tag,
    className,
    variant,
    children,
    ...attrs
  } = props;

  return (
    <Tag className={`{{className}} {{className}}--${variant} ${className}`} {...attrs}>
      {children}
    </Tag>
  );
}

{{name}}.defaultProps = {
  tagName: 'div',
  className: '',
  variant: 'default'
};

export default {{name}};
