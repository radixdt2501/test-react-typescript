import { memo, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpellDetails from "../components/SpellDetails";

import { DungeonsDragonsContext } from "../context/DungeonsDragonsContext";
import useSpells from "../hooks/useSpells";

const SpellDetailPage = memo(() => {
  const param = useParams();

  const dungeonsDragonsState = useContext(DungeonsDragonsContext);
  const { getSpellDetails } = useSpells();

  useEffect(() => {
    (async () => {
      const spellDetail = await getSpellDetails(param?.id!);
      dungeonsDragonsState?.actions.setSpellDetails({ spellDetail });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SpellDetails />;
});

export default SpellDetailPage;
