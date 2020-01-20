import React from 'react';

export default function Button({ children, type }) {
	return (
		<button
			style={{ backgroundColor: '#FF4F02', color: 'white', padding: '15px 60px', fontWeight: 'bold' }}
			className="btn"
			type={type}
		>
			{children}
		</button>
	);
}
