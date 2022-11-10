import useContexApp from '../../Context/useContextApp';
import NavBar from '../navBar/NavBar';
import Logo from '../utils/logo/Logo';
import Picture from '../utils/Picture';

function Header() {
	const { landing } = useContexApp();
	const { background } = landing;

	return (
		<header className="header">
			<Picture params={background} className={'header_background'} />

			<div className="container container-header">
				<div className="header_Navbar">
					<Logo imgColor="black" />

					<NavBar />
				</div>
			</div>
		</header>
	);
}

export default Header;
