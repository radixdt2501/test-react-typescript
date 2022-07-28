import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DungeonsDragonsProvider } from './context/DungeonsDragonsContext';

/* Context */
import { FetchProvider } from './context/FetchContext';

/* Custom-Router */
import Router from './Router';

const App = () => {
	return (
		<Suspense fallback={'Loading...'}>
			<BrowserRouter>
				<FetchProvider>
					<DungeonsDragonsProvider>
						<Router />
					</DungeonsDragonsProvider>
				</FetchProvider>
			</BrowserRouter>
		</Suspense>
	);
};

export default App;
