import React from 'react';

import './Button.css';

export default function Button({ children, classes, styles }) {
	return (
		<button className={`btn text-uppercase font-weight-bold button ${classes}`} style={styles}>
			{children}
		</button>
	);
}
