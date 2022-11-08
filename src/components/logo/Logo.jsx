import { Link } from 'react-router-dom';
import useContexApp from '../../Context/useContextApp';
import Picture from '../utils/Picture';

function Logo() {
	const { logo } = useContexApp();
	const { imgB, imgW } = logo;

	return (
		<div className="logo">
			<Link to="/">
				<Picture params={imgB} />
			</Link>
		</div>
	);
}

export default Logo;
