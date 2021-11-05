import { BrowserRouter as Router } from "react-router-dom";
import { AuthBtn } from "./components/AuthBtn";
import { RoutesComponent } from "./components/RoutesComponent";
import './App.css';

const App = () => {
	return (
		<Router>
			<AuthBtn />
			<RoutesComponent />
		</ Router>
	);
}

export default App;