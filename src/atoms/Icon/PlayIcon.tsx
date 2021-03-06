import React, { CSSProperties } from 'react';
import styled from 'styled-components';

type Props = {
  color?: CSSProperties['color'];
} & React.SVGProps<SVGSVGElement>;

const Component: React.FC<Props> = ({ color = '#ffffff', ...props }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width="100%" height="100%">
      <path d="M8 5v14l11-7z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

const StyledComponent = styled(Component)``;

export const PlayIcon = StyledComponent;
