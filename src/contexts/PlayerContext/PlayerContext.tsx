import React, { useReducer, createContext, useEffect } from 'react';

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
  players: { [id: string]: YT.Player | null } | null;
  dispatch: React.Dispatch<PlayerActions>;
};

export const PlayerContext = createContext<PlayerContext>({} as PlayerContext);

const reducer = (state: PlayerContext['players'], action: PlayerActions) => {
  switch (action.type) {
    case 'AddPlayer': {
      if (state?.[action.payload.id]) return state;
      return {
        ...state,
        [action.payload.id]: null
      };
    }
    case 'MountPlayer': {
      return {
        ...state,
        [action.payload.id]: new YT.Player(action.payload.id)
      };
    }
    case 'RemovePlayer': {
      delete state?.[action.payload.id];
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export const PlayerContextProvider: React.FC = ({ children }) => {
  const [players, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    console.log('players', players);
  }, [players]);

  return <PlayerContext.Provider value={{ players, dispatch }}>{children}</PlayerContext.Provider>;
};
