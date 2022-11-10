import { Context } from './Context';
import routes from '../data/routes';
import networds from '../data/networds';
import servicios from '../data/servicios';
import workTeam from '../data/workTeam';
import portafolio from '../data/portafolio';
import logo from '../data/logo';
import landing from '../data/landing';

function ContextProvider({ children }) {
	return (
		<Context.Provider value={{ routes, logo, landing, servicios, networds }}>
			{children}
		</Context.Provider>
	);
}

export default ContextProvider;
