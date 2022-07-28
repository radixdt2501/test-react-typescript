import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ISpellCardProps } from "../types";
import { DungeonsDragonsContext } from "../context/DungeonsDragonsContext";

const SpellCard: React.FC<ISpellCardProps> = ({ spell, isFavorite }) => {
  const navigate = useNavigate();
  const dungeonsDragonsState = useContext(DungeonsDragonsContext);
  
  return (
    <div className="relative group rounded-lg hover:shadow-2xl border-2 border-gray-300 hover:border-blue-400 p-10 text-center bg-white w-full mx-auto sm:mx-0 max-w-sm">
      <div className="absolute right-5 top-5">
        {!isFavorite ? (
          <svg
            data-testid = 'add-fav'
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="red"
            strokeWidth={2}
            onClick={() => dungeonsDragonsState?.actions?.setFavoriteSpell(spell.name)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ) : (
          <svg
          data-testid = 'fav-icon'
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            viewBox="0 0 20 20"
            fill="red"
            onClick={() => dungeonsDragonsState?.actions?.setFavoriteSpell(spell.name)}
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <h5 className="text-xl font-medium mb-4">{spell.name}</h5>
      <button
        type="button"
        onClick={() => navigate(spell.url.substring(5))}
        className="w-auto hover:hi px-6 py-2.5 bg-opacity-50 hover:opacity-100 bg-gray-400 group-hover:bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        View {spell.name}
      </button>
    </div>
  );
};

export default SpellCard;
