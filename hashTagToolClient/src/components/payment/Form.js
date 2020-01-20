import React from 'react';
import {default as Select} from 'react-select';
import countryList from 'react-select-country-list';

import Input from './Input';
import Button from './Button';
import PaypalImage from '../../img/Paypal.png';

import './Form.css';
import Questions from './Questions';

export default function Form() {
	const [ countries, setCountries ] = React.useState([]);
	const [ value, setValue ] = React.useState(null);
	const [ showFaqs, setFaqs ] = React.useState(false);

	React.useEffect(() => {
		const countryLst = countryList().getData();
		setCountries(countryLst);
	}, []);

	return (
		<div className="form-container">
			<div className="form-inner-container">
				<form className="container myform" onSubmit={(e) => e.preventDefault()}>
					<br />
					<br />
					<h2>Order Details</h2>
					{/* <div className="ml-auto col-8 col-md-3">
						<Select options={countries} value={value} onChange={(v) => setValue(v)} />
					</div> */}
					<hr />
					<div>
						<h6>Contact Information</h6>
						<div className="d-flex flex-column justify-content-center">
							<Input
								label="Fullname"
								type="text"
								id="name"
								helperMsg="Please leave a space between first and last name."
								required={true}
							/>
							<Input label="Company" id="company" type="text" />
							<Input label="Phone" id="phone" type="text" required={true} />
							<Input
								label="Email Address"
								id="email"
								type="email"
								placeholder="sjjk@hsh.com"
								helperMsg="Do note that subscription will be activated for e-mail you specify here. So be sure to use the one you plan to be using as your login. E-mail for invoices and billing can be easily updated afterwards."
								required={true}
							/>
						</div>
					</div>
					<br />
					<hr />
					<div>
						<h6>Mailing Address</h6>
						<div className="d-flex flex-column justify-content-center">
							<div className="form-group row w-75 mx-auto mt-2">
								<label
									htmlFor={'country'}
									className="col-3 col-form-label col-form-label-sm p-0"
									style={{ fontSize: '1.2rem' }}
								>
									Country
									<span className="text-danger">*</span>
								</label>
								<div className="col-9">
									<Select options={countries} value={value} onChange={(v) => setValue(v)} />
								</div>
							</div>
							<Input label="Address" id="address" type="text" required={true} />
							<Input type="text" />
							<Input label="City" id="city" type="text" required={true} />
							<Input label="State" id="state" type="text" required={true} />
							<Input label="Zip Code" id="zip" type="number" required={true} />
						</div>
					</div>
					<br />
					<hr />
					<div>
						<h6>Payment Method</h6>
						<div className="d-flex flex-column justify-content-center">
							<div>
								<input type="radio" id="radio" style={{ marginLeft: 290 }} />
								{'  '}
								<label htmlFor="radio">
									PayPal Account <img width={25} height={15} src={PaypalImage} alt="Paypal" />{' '}
								</label>
							</div>
							<label className="mx-auto faq-text" onClick={() => setFaqs(!showFaqs)}>
								Frequently Asked Questions &darr;
							</label>
							<Questions style={{ backgroundColor: '#F2F4F5', display: showFaqs && 'block' }} />
							<div className="col-10 col-md-3 mx-auto my-5">
								<Button type="submit">Next</Button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
