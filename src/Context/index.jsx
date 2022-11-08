import { Context } from './Context';
import routes from '../data/routes';
import networks from '../data/networks';
import servicios from '../data/servicios';
import workTeam from '../data/workTeam';
import portafolio from '../data/portafolio';
import logo from '../data/logo';
import landing from '../data/landing';

function ContextProvider({ children }) {
	return (
		<Context.Provider value={{ routes, logo, landing, servicios }}>{children}</Context.Provider>
	);
}

export default ContextProvider;
