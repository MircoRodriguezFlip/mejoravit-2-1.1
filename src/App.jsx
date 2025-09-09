import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './hooks/ScrollTop';
import { WhatsAppIcon } from './components/utils/WhatsAppIcon';
import { Footer } from './components/common/Footer';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />

            <Navbar />

            <WhatsAppIcon />

            {loading ? (
                <main className="cargando">
                    <Cargando />
                </main>
            ) : (
                <Suspense
                    fallback={
                        <main className="cargando">
                            <Cargando />
                        </main>
                    }
                >
                    <Routes>
                        <Route path="/" element={<LandingPage />}></Route>
                    </Routes>
                </Suspense>
            )}

            <Footer />
        </BrowserRouter>
    );
}

export default App;
