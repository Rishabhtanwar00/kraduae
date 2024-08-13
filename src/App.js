import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import RoutesContainer from './components/RoutesContainer';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar';
import useWindowDimensions from './components/useWindowDimensions';

function App() {
	const { width } = useWindowDimensions();
	return (
		<div className='App'>
			<BrowserRouter>
				{width > 900 ? <Navbar /> : <MobileNavbar />}
				<RoutesContainer />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
