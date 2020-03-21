import React, { CSSProperties } from 'react';
import styled from 'styled-components';

type Props = {
  color?: CSSProperties['color'];
} & React.SVGProps<SVGSVGElement>;

const Component: React.FC<Props> = ({ color = '#ffffff', ...props }: Props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill={`${color}`}>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

const StyledComponent = styled(Component)``;

export const AddIcon = StyledComponent;
