import useContexApp from '../../Context/useContextApp';
import Logo from '../logo/Logo';
import NavBar from '../navBar/NavBar';
import Picture from '../utils/Picture';

function Header() {
	const { landing } = useContexApp();
	const { background } = landing;

	return (
		<header className="header">
			<Picture params={background} className={'header_background'} />

			<div className="container container-header">
				<div className="header_Navbar">
					<Logo />

					<NavBar />
				</div>
			</div>
		</header>
	);
}

export default Header;
