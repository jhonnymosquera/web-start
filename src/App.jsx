import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PorfolioPage from './pages/PorfolioPage';
import ServicesPage from './pages/ServicesPage';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route path="sobre_nosotros" element={<AboutPage />} />
					<Route path="servicios" element={<ServicesPage />} />
					<Route path="contacto" element={<ContactPage />} />
					<Route path="portafolio" element={<PorfolioPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
