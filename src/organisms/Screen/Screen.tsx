import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../../contexts/PlayerContext/PlayerContext';
import { Player } from '../../molecules/Player/Player';

type Props = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Component: React.FC<Props> = ({ ...props }) => {
  return <main {...props}></main>;
};

const StyledComponent = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Container: React.FC = () => {
  const { players, dispatch } = useContext(PlayerContext);

  const onMount = useCallback(
    (id: string) => {
      dispatch({ type: 'MountPlayer', payload: { id } });
    },
    [dispatch]
  );

  const onRemove = useCallback(
    (id: string) => {
      dispatch({ type: 'RemovePlayer', payload: { id } });
    },
    [dispatch]
  );

  return (
    players && (
      <StyledComponent>
        {Object.keys(players).map(playerId => (
          <Player videoId={playerId} key={playerId} onMount={onMount} onRemove={onRemove} />
        ))}
      </StyledComponent>
    )
  );
};

export const Screen = Container;
