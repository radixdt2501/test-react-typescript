import { memo, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";

import SpellDetails from "../components/SpellDetails";

import { DungeonsDragonsContext } from "../context/DungeonsDragonsContext";
import useSpells from "../hooks/useSpells";

const SpellDetailPage = memo(() => {
  const param = useParams();

  const dungeonsDragonsState = useContext(DungeonsDragonsContext);
  const { getSpellDetails } = useSpells();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const spellDetail = await getSpellDetails(param?.id!);
      setIsLoading(false);
      dungeonsDragonsState?.actions.setSpellDetails({ spellDetail });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen  flex items-center text-center justify-center	">
          {" "}
          <PulseLoader />
        </div>
      ) : (
        <SpellDetails data-testid="SpellDetails" />
      )}
    </>
  );
});

export default SpellDetailPage;
