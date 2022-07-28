import React, { Fragment, memo, useContext, useEffect } from "react";

import { ISpell } from "../types";
import useSpells from "../hooks/useSpells";
import SpellCard from "../components/SpellCard";
import { DungeonsDragonsContext } from "../context/DungeonsDragonsContext";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
const HomePage = memo(() => {
  const dungeonsDragonsState = useContext(DungeonsDragonsContext);
  const [isLoading, setIsLoading] = useState(false);
  const { getSpells } = useSpells();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const spells = await getSpells();
      setIsLoading(false);
      dungeonsDragonsState?.actions.setSpells({ spells: spells.results });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <div className="h-screen  flex items-center text-center justify-center	">
          <PulseLoader />
        </div>
      ) : (
        <Fragment>
          <h3
            data-testid="heading"
            className="text-blue-600 text-2xl font-medium m-2 text-center pt-10"
          >
            Welcome to Dungeons &amp; Dragons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-4 p-8">
            {dungeonsDragonsState?.state?.spells?.map((spell: ISpell) => {
              const isFavorite =
                dungeonsDragonsState.state?.favoriteSpells.includes(spell.name);
              return (
                <SpellCard
                  spell={spell}
                  key={spell.index}
                  isFavorite={isFavorite}
                />
              );
            })}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
});

export default HomePage;
