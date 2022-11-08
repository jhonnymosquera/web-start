function Picture({ params, className = '' }) {
	return (
		<picture className={className}>
			<source srcSet={params.avif} type="image/avif" />
			<source srcSet={params.webp} type="image/webp" />
			<img srcSet={params.png} alt={params.alt} />
		</picture>
	);
}

export default Picture;
