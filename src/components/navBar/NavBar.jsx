import NavBarLiks from './NavBarLiks';
import useContexApp from '../../Context/useContextApp';

function NavBar() {
	const { routes } = useContexApp();

	return (
		<nav className="nav">
			<ul>
				{routes.map((route, index) => {
					return <NavBarLiks key={index} route={route} />;
				})}
			</ul>
		</nav>
	);
}

export default NavBar;
