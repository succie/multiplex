import React, { useReducer, createContext, useEffect } from 'react';
import { produce, Draft } from 'immer';

type AddPlayerAction = {
  type: 'AddPlayer';
  payload: {
    id: string;
  };
};

type MountPlayerAction = {
  type: 'MountPlayer';
  payload: {
    id: string;
  };
};

type RemovePlayerAction = {
  type: 'RemovePlayer';
  payload: {
    id: string;
  };
};

type PlayerActions = AddPlayerAction | MountPlayerAction | RemovePlayerAction;

export type PlayerContext = {
  players: { [id: string]: YT.Player | null };
  dispatch: React.Dispatch<PlayerActions>;
};

export const PlayerContext = createContext<PlayerContext>({} as PlayerContext);

const reducer = produce((draft: Draft<PlayerContext['players']>, action: PlayerActions) => {
  switch (action.type) {
    case 'AddPlayer': {
      if (draft[action.payload.id]) return draft;
      draft[action.payload.id] = null;
      return;
    }
    case 'MountPlayer': {
      draft[action.payload.id] = new YT.Player(action.payload.id);
      return;
    }
    case 'RemovePlayer': {
      delete draft[action.payload.id];
      return;
    }
    default: {
      return draft;
    }
  }
});

export const PlayerContextProvider: React.FC = ({ children }) => {
  const [players, dispatch] = useReducer(reducer, {} as PlayerContext['players']);

  useEffect(() => {
    console.log('players', players);
  }, [players]);

  return <PlayerContext.Provider value={{ players, dispatch }}>{children}</PlayerContext.Provider>;
};
