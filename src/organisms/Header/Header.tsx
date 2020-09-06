import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { AddIcon } from '../../atoms/Icon';
import { PlayerContext } from '../../contexts/PlayerContext/PlayerContext';
import { useForm } from 'react-hook-form';
import { PlayButton } from '../../molecules/PlayButton/PlayButton';
import { PauseButton } from '../../molecules/PauseButton/PauseButton';

type FormData = {
  videoId: string;
};

type Props = {
  onAdd: (id: string) => void;
  onPlayAll: () => void;
  onPauseAll: () => void;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Component: React.FC<Props> = ({ onAdd, onPlayAll, onPauseAll, ...props }) => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = useCallback((data: FormData) => {
    let videoId: string = '';
    if (data.videoId.includes('https://')) {
      // Extracting IDs in the case of URLs.
      const id = data.videoId.match(/youtu(?:.*\/v\/|.*v=|\.be\/)([A-Za-z0-9_-]{11})/);
      if (!id) {
        throw new Error('Invalid videoId');
      }
      videoId = id[1];
    } else {
      videoId = data.videoId;
    }
    onAdd(videoId);
    reset();
  }, []);

  return (
    <header {...props}>
      <form className="search" onSubmit={handleSubmit(onSubmit)}>
        <Input name="videoId" className="searchForm" placeholder="動画ID / URL" ref={register({ required: true })} />
        <Button type="submit" className="searchButton">
          <AddIcon color="#6e6e6e" />
        </Button>
      </form>
      <div className="controller">
        <PlayButton className="playAll" onClick={onPlayAll} />
        <PauseButton className="pauseAll" onClick={onPauseAll} />
      </div>
    </header>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 56px;
  background-color: #202020;

  .search {
    display: flex;
    align-items: center;
  }

  .searchForm {
    font-size: 16px;
    width: 575px;
    height: 32px;
    background-color: #121212;
    border-radius: 4px 0 0 4px;
    border-right: none;
  }

  .searchButton {
    width: 65px;
    height: 32px;
    padding: 0;
    border-radius: 0 4px 4px 0;
    border: 1px solid #313131;
    border-left: none;
    background-color: #313131;
  }

  .controller {
    margin: 0 32px;
    position: absolute;
    right: 0;

    * + * {
      margin-left: 8px;
    }
  }

  .playAll {
    height: 32px;
    width: 32px;
    padding: 0;
  }

  .pauseAll {
    height: 32px;
    width: 32px;
    padding: 0;
  }
`;

const Container: React.FC = () => {
  const { players, dispatch } = useContext(PlayerContext);
  const onAdd = useCallback(
    (id: string) => {
      dispatch({ type: 'AddPlayer', payload: { id } });
    },
    [dispatch]
  );

  const onPlayAll = useCallback(() => {
    if (!players) return;

    Object.values(players).map(player => {
      if (!player) return console.error('player is not mounted.');
      player.playVideo();
    });
  }, [players]);

  const onPauseAll = useCallback(() => {
    if (!players) return;

    Object.values(players).map(player => {
      if (!player) return console.error('player is not mounted.');
      player.pauseVideo();
    });
  }, [players]);

  return <StyledComponent onAdd={onAdd} onPlayAll={onPlayAll} onPauseAll={onPauseAll} />;
};

export const Header = Container;
