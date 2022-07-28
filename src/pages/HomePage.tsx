import React, { Fragment, memo, useContext, useEffect } from 'react';

import { ISpell } from '../types';
import useSpells from '../hooks/useSpells';
import SpellCard from '../components/SpellCard';
import { DungeonsDragonsContext } from '../context/DungeonsDragonsContext';

const HomePage = memo(() => {
	const dungeonsDragonsState = useContext(DungeonsDragonsContext);

	const { getSpells } = useSpells();

	useEffect(() => {
		(async () => {
			const spells = await getSpells();
			dungeonsDragonsState?.actions.setSpells({ spells: spells.results });
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Fragment>
			<h3 className="text-blue-600 text-2xl font-medium m-2 text-center pt-10">Welcome to Dungeons &amp; Dragons</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-4 p-8">
				{dungeonsDragonsState?.state?.spells?.map((spell: ISpell) => {
					const isFavorite = dungeonsDragonsState.state?.favoriteSpells.includes(spell.name);
					return <SpellCard spell={spell} key={spell.index} isFavorite={isFavorite} />;
				})}
			</div>
		</Fragment>
	);
});

export default HomePage;
