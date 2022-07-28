import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DungeonsDragonsContext } from "../context/DungeonsDragonsContext";
import SpellProperties from "./SpellProperties";

const SpellDetails = () => {
  const navigate = useNavigate();

  const dungeonsDragonsState = useContext(DungeonsDragonsContext);
  const spellDetailState = dungeonsDragonsState?.state?.spellDetail;

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-10 px-4 grid items-center gap-y-16 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mb-5 text-white bg-gray-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
            Go Back
          </button>

          <div className="bg-white">
            <div className="py-12 px-4 grid items-center gap-y-16 gap-x-8 sm:px-0">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Specifications for {spellDetailState?.name}
                </h2>
                {spellDetailState?.desc?.map((d) => {
                  return <p className="mt-4 text-gray-500">{d}</p>;
                })}
                <dl className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                  <SpellProperties
                    title="Range"
                    description={spellDetailState?.range}
                  />
                  <SpellProperties
                    title="Material"
                    description={spellDetailState?.material}
                  />
                  <SpellProperties
                    title="Duration"
                    description={spellDetailState?.duration}
                  />
                  <SpellProperties
                    title="Level"
                    description={spellDetailState?.level}
                  />
                  <SpellProperties
                    title="Attack Type"
                    description={spellDetailState?.attack_type}
                  />
                  <SpellProperties
                    title="Damage Type"
                    description={spellDetailState?.damage?.damage_type?.name}
                  />
                  <SpellProperties
                    title="School"
                    description={spellDetailState?.school?.name}
                  />
                  <SpellProperties
                    title="Classes"
                    description={spellDetailState?.classes?.map((c) => c?.name)}
                  />
                  <SpellProperties
                    title="Subclasses"
                    description={spellDetailState?.subclasses?.map(
                      (s) => s?.name
                    )}
                  />
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellDetails;
