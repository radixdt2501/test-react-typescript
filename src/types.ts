export interface ISpell {
	index: string;
	name: string;
	url: string;
}

export interface IDungeonsDragonsState {
	spells: ISpell[];
	spellDetail: ISpellDetails;
	favoriteSpells: {}[];
}

export type Spells = Pick<IDungeonsDragonsState, 'spells'>;
export type TDungeonsDragonsAction =
	| {
			type: 'SET_SPELLS';
			payload: Spells;
	  }
	| {
			type: 'SET_FAVORITE_SPELL';
			payload: string;
	  }
	| {
			type: 'SET_SPELL_DETAIL';
			payload: { spellDetail: ISpellDetails };
	  };

export interface ISpellCardProps {
	spell: ISpell;
	isFavorite: boolean;
}

export interface IDungeonsDragonsCTX {
	state: IDungeonsDragonsState;
	actions: {
		setSpells: (payload: Spells) => void;
		setSpellDetails: (payload: { spellDetail: ISpellDetails }) => void;
		setFavoriteSpell: (payload: string) => void;
	};
}

export interface ISpellDetails {
	attack_type: string;
	casting_time: string;
	classes: ISpell[];
	components: string[];
	concentration: boolean;
	damage: {
		damage_at_slot_level: Record<number, string>;
		damage_type: ISpell;
	};
	desc: string[];
	duration: string;
	higher_level: string[];
	index: string;
	level: number;
	material: string;
	name: string;
	range: string;
	ritual: boolean;
	school: ISpell;
	subclasses: ISpell[];
	url: string;
	_id: string;
}
