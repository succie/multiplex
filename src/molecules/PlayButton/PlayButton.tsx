import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Button/Button';
import { PlayIcon } from '../../atoms/Icon/PlayIcon';

type Props = {} & React.ComponentProps<typeof Button>;

const Component: React.FC<Props> = ({ ...props }) => {
  return (
    <Button {...props}>
      <PlayIcon />
    </Button>
  );
};

const StyledComponent = styled(Component)``;

export const PlayButton = StyledComponent;
