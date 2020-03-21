import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Header } from './organisms/Header/Header';
import { PlayerContextProvider } from './contexts/PlayerContext/PlayerContext';
import { Screen } from './organisms/Screen/Screen';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Kosugi Maru', sans-serif;
    font-size: 12px;
    background-color: #181818;
    position: relative;
    margin: 0;
    padding: 0;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }
`;

const App = () => {
  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {};
  }, []);

  return (
    <PlayerContextProvider>
      <GlobalStyle />
      <Header />
      <Screen />
    </PlayerContextProvider>
  );
};

render(<App />, document.querySelector('#root'));
