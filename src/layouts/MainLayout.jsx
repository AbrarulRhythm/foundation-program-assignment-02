import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const MainLayout = () => {
    return (
        <div className="site-wrap">
            {/* Header */}
            <header>
                <Header></Header>
            </header>
            {/* Header End */}

            {/* ========================= - Main ========================= */}
            <main className="site-main">
                <Outlet></Outlet>
            </main>
            {/* ========================= - Main End ========================= */}

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
            {/* Footer End */}
        </div>
    );
};

export default MainLayout;
