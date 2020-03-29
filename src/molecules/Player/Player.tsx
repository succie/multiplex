import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Button/Button';

type Props = {
  videoId: string;
  onMount: (id: string) => void;
  onRemove: (id: string) => void;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Component: React.FC<Props> = ({ videoId, onMount, onRemove, ...props }) => {
  useEffect(() => {
    onMount(videoId);
  }, [onMount]);

  const onRemoveClick = useCallback(() => {
    onRemove(videoId);
  }, [onRemove]);

  return (
    <div {...props}>
      <iframe
        id={videoId}
        width="640"
        height="360"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&fs=0&origin=${location.origin}&widget_referrer=${location.origin}`}
      ></iframe>
      <Button className="remove" onClick={onRemoveClick}>
        REMOVE
      </Button>
    </div>
  );
};

const StyledComponent = styled(Component)`
  position: relative;
  width: 640px;
  height: 360px;

  &:hover .remove {
    display: block;
  }

  .remove {
    display: none;
    position: absolute;
    top: 76px;
    right: 24px;
    z-index: 1;
    background-color: #313131;
  }
`;

export const Player = StyledComponent;
