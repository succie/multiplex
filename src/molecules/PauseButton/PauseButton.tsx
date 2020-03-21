import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Button/Button';
import { PauseIcon } from '../../atoms/Icon/PauseIcon';

type Props = {} & React.ComponentProps<typeof Button>;

const Component: React.FC<Props> = ({ ...props }) => {
  return (
    <Button {...props}>
      <PauseIcon />
    </Button>
  );
};

const StyledComponent = styled(Component)``;

export const PauseButton = StyledComponent;
