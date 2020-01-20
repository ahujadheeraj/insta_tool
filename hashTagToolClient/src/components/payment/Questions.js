import React from 'react';

export default function Questions({ style }) {
	return (
		<div className="p-3 faq-questions" style={style}>
			<h4>Will I be automatically charged for the monthly subscription after 7 days of paid trial?</h4>
			<p>
				Yes, if you do not cancel within the 7 days of paid trial, you will be charged the monthly subscription
				thereafter. Thus, if you are not ready to proceed with the paid monthly subscription, ensure that you
				cancel by the end of the 7 days.
			</p>
			<h4>Are there any setup fees?</h4>
			<p>
				No. There are no setup fees or hidden charges with any of our account plans. However, there may be tax
				applied to the final fee by our reseller FastSpring depending on the country. For more info on handling
				sale taxes for your country, please, check this URL -
				https://support.fastspring.com/hc/en-us/articles/207436686
			</p>
			<h4>Does the paid trial limit my access to features?</h4>
			<p>
				The paid trial enables you to try out our Lite and / or Standard plans and you will be able to enjoy
				full access to the features available to those plans.
			</p>
			<h4>Am I agreeing to a contract when apply for a trial?</h4>
			<p>
				No. We don't have any contracts obliging you stay subscribed. You can cancel your subscription at any
				time.
			</p>
		</div>
	);
}
