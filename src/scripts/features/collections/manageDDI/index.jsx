import React, {useContext} from 'react';


// ALL CONTEXT FILES
import BaseContext from '../../../models/baseContext';

export const ManageDDIPage = (props) => {
	
	// DECLARE CONTEXT
	const base = useContext(BaseContext);

	const navigate = (type) => {
		props.changeComponent(type);
	}

	return(
	<> 
		{base.data.welcome}
		Manage DDI Page
		<a onClick={() => navigate('ApproveDDIPage')}>Back to Approve DDI</a>
	</>
	)
}