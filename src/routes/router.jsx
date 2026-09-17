import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import AllMovies from '../pages/AllMovies/AllMovies';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/all-movies',
                Component: AllMovies,
            },
        ],
    },
]);
