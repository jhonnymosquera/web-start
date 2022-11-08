import Picture from '../utils/Picture';

function Servicios({ params, className = '' }) {
	console.log(params);
	const { description, img } = params;

	return (
		<article className="className">
			<Picture params={img} />

			<h3>{description}</h3>
		</article>
	);
}

export default Servicios;
