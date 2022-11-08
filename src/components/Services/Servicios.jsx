import Picture from '../utils/Picture';

function Servicios({ params, classsName = '' }) {
	const { description, img } = params;

	return (
		<article className={classsName}>
			<Picture params={img} />

			<h3>{description}</h3>
		</article>
	);
}

export default Servicios;
