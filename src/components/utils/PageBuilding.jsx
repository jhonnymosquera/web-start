import useContexApp from '../../Context/useContextApp';
import Picture from './Picture';

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
