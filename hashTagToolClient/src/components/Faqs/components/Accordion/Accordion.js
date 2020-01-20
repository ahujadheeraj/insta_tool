import React from 'react';

import './Accordion.css';

const faqs = [
	{
		question: 'How does InfluRocket work?',
		answer: '	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.'
	},
	{
		question: 'How many followers should I expect every month from InfluRocket?',
		answer: '	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.'
	},
	{
		question: 'Why do I need more followers?',
		answer: '	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.'
	},
	{
		question: 'Will InfluRocket work for my industry?',
		answer: '	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.'
	},
	{
		question: 'How is InfluRocket different?',
		answer: '	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.'
	},
	{
		question: 'Is InfluRocket free?',
		answer: '	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.'
	},
	{
		question: 'How does the custom solution work?',
		answer: '	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.'
	}
];

export default function Accordion() {
	return (
		<div className="row">
			<div className="col">
				<div className="tabs">
					{faqs.map((faq, index) => (
						<div key={index} className="tab">
							<input type="checkbox" id={`rd${index + 1}`} name="rd" className="input" />
							<label className="tab-label" htmlFor={`rd${index + 1}`}>
								{faq.question}
							</label>
							<div className="tab-content" id={`content${index + 1}`}>
								{faq.answer}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
