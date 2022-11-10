import { Link } from 'react-router-dom';
import Picture from '../Picture';
import style from './Netweords.module.css';

function Netweord({ netweord, iconColor }) {
	const { url, icon } = netweord;
	const iconBackgroundColor = iconColor === 'black' ? icon.imgB : icon.imgW;

	return (
		<div className="netword">
			<a href={url} target="_blank">
				<Picture params={iconBackgroundColor} className={style.netword} />
			</a>
		</div>
	);
}

export default Netweord;
