import React, {useState, useEffect} from 'react';

import {SideBar} from '../layout/menu';
import {Header} from '../layout/header';
import {Footer} from '../layout/footer';

import {initComponent} from '../../reducers/appReducer';
import * as FeatureComponents from '../../features';
import * as Utils from '../../helper/utils';
import * as Constant from '../../helper/constant';

export const HomePage = (props) => {

	const [state, setState] = useState(Constant.GENERIC.INITCOMPONENT);
	let MyActiveComponent   = FeatureComponents[state];

	return(
	<div className="text-center">
		
		<SideBar changeComponent={setState}/>
		<div className="page-content">
			<MyActiveComponent changeComponent={setState}/>
			
		</div>
	</div>
	)
}