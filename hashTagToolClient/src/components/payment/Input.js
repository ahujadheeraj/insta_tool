import React from 'react';

export default function Input({ label, value, id, placeholder, type, required, helperMsg }) {
	return (
		<div className="form-group row w-75 mx-auto mt-2">
			<label htmlFor={id} className="col-3 col-form-label col-form-label-sm p-0" style={{ fontSize: '1.2rem' }}>
				{label}
				<span className="text-danger">{required && '*'}</span>
			</label>
			<div className="col-9">
				<input
					value={value}
					type={type}
					className="form-control form-control-sm"
					id={id}
					placeholder={placeholder}
					required={required}
					style={{ fontSize: 20 }}
				/>
				<small className="text-muted">{helperMsg}</small>
			</div>
		</div>
	);
}
