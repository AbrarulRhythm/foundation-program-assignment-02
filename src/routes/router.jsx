import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import AllMovies from '../pages/AllMovies/AllMovies';
import AboutUs from '../pages/AboutUs/AboutUs';
import Blog from '../pages/Blog/Blog';
import TVSeries from '../pages/TVSeries/TVSeries';

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
                path: 'all-movies',
                Component: AllMovies,
            },
            {
                path: 'about-us',
                Component: AboutUs,
            },
            {
                path: 'blog',
                Component: Blog,
            },
            {
                path: 'tv-series',
                Component: TVSeries,
            },
        ],
    },
]);
