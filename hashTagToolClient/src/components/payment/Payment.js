import React from 'react';
import Form from './Form';

import './Payment.css';

function App() {
	return (
		<div className="container-fluid p-0">
			<header>
				<h1 className="display-3 font-weight-bold">Standard Subsription</h1>
				<label>First Week PKR 1,146.34, then PKR 29,313.47 Monthly</label>
			</header>
			<Form />
		</div>
	);
}

export default App;
