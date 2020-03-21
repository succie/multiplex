import React from 'react';
import styled from 'styled-components';

type Props = {} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Component: React.FC<Props> = ({ ...props }) => {
  return <button {...props} />;
};

const StyledComponent = styled(Component)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid #424242;
  border-radius: 4px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: #313131;
  }

  :disabled {
    color: #bdbdbd;
    border: 1px solid #bdbdbd;
  }
`;

export const Button = StyledComponent;
