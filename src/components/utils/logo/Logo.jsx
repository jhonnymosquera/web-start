import { Link } from 'react-router-dom';
import useContexApp from '../../../Context/useContextApp';
import Picture from '../Picture';
import style from './Logo.module.css';

function Logo({ imgColor, className = '' }) {
	const { logo } = useContexApp();
	const logoColor = imgColor === 'black' ? logo.imgB : logo.imgW;

	return (
		<div className={`${style.logo} ${className}`}>
			<Link to="/">
				<Picture params={logoColor} />
			</Link>
		</div>
	);
}

export default Logo;
