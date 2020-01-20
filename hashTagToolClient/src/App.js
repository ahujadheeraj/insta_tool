import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Index from './pages/Index/Index';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<BrowserRouter>

				<Switch>
					<Route exact path="/" component={Index} />
					<Route path="/" component={Index} />
					{ <Redirect to="/" /> }
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
