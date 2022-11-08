import NavBarLiks from './NavBarLiks';
import useContexApp from '../../Context/useContextApp';

function NavBar() {
	const { routes } = useContexApp();

	return (
		<nav className="nav">
			<ul>
				{routes.map((route) => {
					return <NavBarLiks key={route.rute} route={route} />;
				})}
			</ul>
		</nav>
	);
}

export default NavBar;
