import React, { forwardRef } from 'react';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Component = forwardRef<HTMLInputElement, Props>((props, ref) => <input {...props} ref={ref} />);

const StyledComponent = styled(Component)`
  display: inline-block;
  padding: 2px 6px;
  color: rgba(255, 255, 255, 0.88);
  background: transparent;
  border: 1px solid #313131;
  border-radius: 4px;
  outline: none;
`;

export const Input = StyledComponent;
