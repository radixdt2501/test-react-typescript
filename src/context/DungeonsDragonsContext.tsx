import React, {
  FC,
  useCallback,
  useReducer,
  createContext,
  useMemo,
} from "react";
import {
  IDungeonsDragonsCTX,
  IDungeonsDragonsState,
  ISpellDetails,
  Spells,
  TDungeonsDragonsAction,
} from "../types";

const initialState: IDungeonsDragonsState = {
  spells: [],
  spellDetail: {} as ISpellDetails,
  favoriteSpells: ["Acid Arrow"],
};

const DungeonsDragonsContext = createContext<IDungeonsDragonsCTX | null>(null);
const { Provider } = DungeonsDragonsContext;

const dungeonsDragonsReducer = (
  state: IDungeonsDragonsState,
  action: TDungeonsDragonsAction
) => {
  switch (action.type) {
    case "SET_SPELLS": {
      return {
        ...state,
        spells: action.payload.spells,
      };
    }
    case "SET_SPELL_DETAIL": {
      return {
        ...state,
        spellDetail: action.payload.spellDetail,
      };
    }
    case "SET_FAVORITE_SPELL": {
      let favoriteSpells = state.favoriteSpells;
      if (favoriteSpells.includes(action.payload)) {
        favoriteSpells = favoriteSpells.filter(
          (item) => item !== action.payload
        );
        return {
          ...state,
          favoriteSpells,
        };
      } else {
        return {
          ...state,
          favoriteSpells: [...state.favoriteSpells, action.payload],
        };
      }
    }
    default:
      return state;
  }
};

const DungeonsDragonsProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(dungeonsDragonsReducer, initialState);

  const setSpells = useCallback(
    (payload: Spells) => {
      return dispatch({ type: "SET_SPELLS", payload });
    },
    [dispatch]
  );

  const setSpellDetails = useCallback(
    (payload: { spellDetail: ISpellDetails }) => {
      return dispatch({ type: "SET_SPELL_DETAIL", payload });
    },
    [dispatch]
  );
  const setFavoriteSpell = useCallback(
    (payload: string) => {
      return dispatch({ type: "SET_FAVORITE_SPELL", payload });
    },
    [dispatch]
  );

  const value = useMemo(
    () => ({
      state,
      actions: { setSpells, setSpellDetails, setFavoriteSpell },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  return <Provider value={value}>{children}</Provider>;
};

export { DungeonsDragonsContext, DungeonsDragonsProvider };
