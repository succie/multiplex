import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

type Props = {
  videoId: string;
  onMount: (id: string) => void;
} & React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;

const Component: React.FC<Props> = ({ videoId, onMount, ...props }) => {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    onMount(videoId);
  }, [onMount]);

  return (
    <iframe
      {...props}
      id={videoId}
      width="640"
      height="360"
      frameBorder="0"
      src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${location.origin}`}
      ref={ref}
    ></iframe>
  );
};

const StyledComponent = styled(Component)``;

export const Player = StyledComponent;
