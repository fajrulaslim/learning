import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component {
	render(){
		let indonesia = require('moment/locale/id');
		Moment.updateLocale('id', indonesia);
		return(
			<div>
				<h3>Aktivitas Harian</h3>
				<p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
			</div>
		);
	}
}

export default Header;