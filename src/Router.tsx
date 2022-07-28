import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

/* Lazy Loaded Routes */
const HomePage = lazy(() => import('./pages/HomePage'));
const SpellDetailPage = lazy(() => import('./pages/SpellDetailPage'));

const Router = () => {
	const routes = [
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/spells/:id',
			element: <SpellDetailPage />,
		},
	];
	return useRoutes(routes);
};

export default Router;
