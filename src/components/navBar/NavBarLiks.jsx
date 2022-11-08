import { NavLink } from 'react-router-dom';

function NavBarLiks({ route }) {
	return (
		<li>
			<NavLink to={route.rute}>{route.label}</NavLink>
		</li>
	);
}

export default NavBarLiks;
