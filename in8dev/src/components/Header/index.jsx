import './index.css';
import { useEffect, useState } from 'react';
import logo from 'assets/logo-in8-dev.svg';

const Header = () => {
	const [isVisibleBlue, setIsVisibleBlue] = useState(false);
	const verify = e => {
		const rect = e.getBoundingClientRect();
		const elemTop = rect.top;
		const visibilitie = elemTop <= 75;
		return visibilitie;
	};
	const isScrolledIntoView = () => {
		const b = document.getElementById('Registration__Form');
		const blue = verify(b);
		setIsVisibleBlue(blue);
	};
	useEffect(() => {
		window.addEventListener('scroll', isScrolledIntoView, { passive: true });
		return () => {
			window.removeEventListener('scroll', isScrolledIntoView);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div
			id='headerContainer'
			className={`Header__Container ${window.pageYOffset > 0 ? `Header__Container__Hide` : undefined} ${isVisibleBlue ? `Header__Container__Bright` : undefined}`}
		>
			<div id='logo'>
				<img
					src={logo}
					alt='Logomarca da IN8DEV'
					className='Logo__Content'
					onClick={() => {
						window.location.reload();
					}}
				/>
			</div>
			<div className='Header__Container__Menu'>
				<div className='Header__Container__Menu__Image'></div>
				<nav className='Navbar'>
					<ul>
						<li
							id='register'
							onClick={e => {
								e.stopPropagation();
								document.getElementById('Registration__Form').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
							}}
						>
							cadastro
						</li>
					</ul>
					<ul>
						<li
							id='registered'
							onClick={e => {
								e.stopPropagation();
								document.getElementById('Registrated__Table').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
							}}
						>
							lista
						</li>
						<li
							id='about'
							onClick={e => {
								e.stopPropagation();
								document.getElementById('Footer').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
							}}
						>
							sobre mim
						</li>
					</ul>
				</nav>
				<div id='overlay'></div>
			</div>
		</div>
	);
};

export default Header;
