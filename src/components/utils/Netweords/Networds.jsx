import useContexApp from '../../../Context/useContextApp';
import Netweord from './Netweord';

function Networds({ iconColor = 'black' }) {
	const { networds } = useContexApp();

	return (
		<div className="networds">
			{networds.map((netweord) => {
				return <Netweord key={netweord.name} netweord={netweord} iconColor={iconColor} />;
			})}
		</div>
	);
}

export default Networds;
