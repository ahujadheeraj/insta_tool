import React from 'react';

import './Index.css';

import PinTool from '../../components/PinterestTool/PinTool';
import PriceCalc from '../../components/PriceCalc/PriceCalc';
import Navbar from '../../components/Navbar/Navbar';
import BlogHome from '../../components/BlogHome/BlogHome';
import Blog from '../../components/Blog/Blog';
import AdvancedSearch from '../../components/advancedSearch/as'

import Admin from '../../components/Admin/Admin';
import BlogAdmin from '../../components/BlogAdmin/BlogAdmin';

import App from '../../components/DheerajApp/app';
import Tools from '../../components/pages/tools';
import Faqs from '../../components/Faqs/pages/Index/Index'

import Homepage from '../../components/homepage/src/App'
import Seo from '../../components/Seo/src/App'
import Dialog from '../../components/dialog/src/App'
import Thankyou from '../../components/Seo/src/components/Thankyou/Thankyou'


import {Route, Switch, BrowserRouter} from 'react-router-dom';

export default function Index() {
	return (
		<div style={{ overflow: 'hidden' }}>

			<BrowserRouter>

			<Navbar />

				<Switch>
						<Route exact path="/" component={Homepage} />

					<Route exact path='/followback' component={App} />
        			<Route exact path='/hashtag' component={Tools} />

					<Route path="/tools/calc" component={PriceCalc} />
					<Route path="/blog/b-id" component={Blog} />
					<Route path="/blogs" component={BlogHome} />

					<Route path="/admin" component={Admin} />
					<Route path="/BlogAdmin" component={BlogAdmin} />
					<Route path="/seo" component={Seo} />
					<Route path="/dialog" component={Dialog} />
					<Route path="/thankyou" exact component={Thankyou} />




					<Route path="/pinterest-SEO-Tool" component={PinTool} />
					<Route exact path='/advsearch' render={props=> 
            			<div>
						<AdvancedSearch />  
						<Faqs/>
						
						</div>
						} />
					{/* <Route exact path="/" component={PinTool} /> */}
				</Switch>

			</BrowserRouter>

		</div>
	);
}
