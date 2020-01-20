import React from 'react';

import './Accordion.css';

const faqs = [
	{
		question: 'How does the pinterest SEO tool work?',
		answer: "Pinterest SEO tool helps you to perform a thorough keyword research in order to create a detailed pinterest strategy to grow your brand. There may be several keywords that you’re likely to miss out if you manually look for keywords. InfluRocket SEO tool helps you to address that risk by presenting a ton of possible keywords for a certain given word or phrase."
	},
	{
		question: 'How can I use the different related keywords extracted by the tool?',
		answer: "You should pick all keywords that are relevant to your content and use them in your description. In many cases you may create similar versions of your content to cater to related keywords that people are looking for."
	},
	{
		question: 'Can I find the search volumes for these keywords to understand their popularity?',
		answer: "Currently we are working on an upgrade to the tool to show you search volumes and difficulty level for each keyword. You may sign up with us to get free access to this feature for 2 months when we launch it."
	},
	{
		question: 'While using the keywords for planning my content, how should I prioritize one keyword over the other?',
		answer: "We are soon going to show you keyword difficulty level that will give you an idea about the competition for a particular keyword. A higher difficulty score implies lots of popular content creators have created content for that keyword. This will help you select keywords with low difficulty scores where you have higher chances to appear in the searches. You may sign up with us to get free access to this feature for 2 months when we launch it."
	},
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
