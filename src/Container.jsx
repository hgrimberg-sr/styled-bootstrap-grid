import React from 'react';

import buildProps from './utils/buildProps';
import { Container, ContainerFluid } from './styled';

const container = (props) => {
  const { fluid, children } = props;

  const propsKeys = [
    'fluid',
    'children',
  ];

  const otherProps = buildProps(props, propsKeys);

  if (fluid) {
    return <ContainerFluid data-name="container-fluid" {...otherProps}>{children}</ContainerFluid>;
  }
  return <Container data-name="container" {...otherProps}>{children}</Container>;
};

container.propTypes = {
  children: React.PropTypes.any,
  fluid: React.PropTypes.bool.isRequired,
};

container.defaultProps = {
  children: null,
  fluid: false,
};

export default container;
