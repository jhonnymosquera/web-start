import { useLocation } from 'react-router-dom';
import ButtonLink from '../utils/Buttons/ButtonLink';
import Logo from '../utils/logo/Logo';
import Networds from '../utils/Netweords/Networds';

function Footer() {
	let location = useLocation();
	const path = location.pathname;
	const color = path === '/' ? 'black' : 'white';

	return (
		<footer className={`footer footer_${color}`}>
			<Logo imgColor={color} />
			<Networds iconColor={color} />
			<ButtonLink
				rute="contacto"
				value="Contacto"
				className={`footer_button footer_button_${color}`}
			/>
		</footer>
	);
}

export default Footer;
