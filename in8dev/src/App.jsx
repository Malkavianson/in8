import './App.css';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import upBtn from 'assets/icons/topo-pag.svg';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
	// eslint-disable-next-line no-unused-vars
	const [scrollPosition, setScrollPosition] = useState();
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div className='App'>
			<Toaster
				position='bottom-center'
				reverseOrder={false}
			/>
			<Header />
			<Main />
			<Footer />
			<img
				id='upBtn'
				src={upBtn}
				alt='Rolar para início da página'
				className={`Up__Btn ${window.pageYOffset < 600 ? `Up__Btn__Hide` : undefined}`}
				onClick={e => {
					e.stopPropagation();
					document.getElementById('headerContainer').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
				}}
			/>
		</div>
	);
}

export default App;
