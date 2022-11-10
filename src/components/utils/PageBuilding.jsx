import useContexApp from '../../Context/useContextApp';
import Picture from './Picture';

import { LazyLoadImage } from 'react-lazy-load-image-component';

function PageBuilding() {
	const { landing } = useContexApp();

	return (
		<div className="PageBuilding">
			<h2>Pagina en construnccion</h2>

			<Picture params={landing.pageBuilding} />
		</div>
	);
}

export default PageBuilding;
