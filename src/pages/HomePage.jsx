import Servicios from '../components/Services/Servicios';
import Picture from '../components/utils/Picture';
import useContexApp from '../Context/useContextApp';

function HomePage() {
	const { landing, servicios } = useContexApp();
	const { page } = landing;

	return (
		<main className="homePage">
			<div className="homePage_title">
				<p>Somos</p>
				<h1>Creativos</h1>
			</div>

			<section className="homePage_section container">
				<Picture params={page} />

				<article className="homePage_section_article">
					<h2 className="homePage_section_article_h2">Conocenos</h2>

					<p className="homePage_section_article_p">
						Hacemos que tu <span>Marca alcance el reconocimiento</span> deseado en todos los canales
						a través de estrategias <span>SEO y SEM.</span> Contamos con las herramientas y aliados
						clave para complir con cada uno de los <span>objetivos trazados.</span>
					</p>
				</article>
			</section>

			<section className="homePage_services">
				<h2 className="homePage_services_h2">Nuestros Servicios</h2>

				<div className="homePage_services_produts container">
					{servicios.map((servicio, index) => {
						return (
							<Servicios
								key={index}
								params={servicio}
								className={'homePage_services_produts_produt'}
							/>
						);
					})}
				</div>
			</section>
		</main>
	);
}

export default HomePage;
