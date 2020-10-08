import React, {useContext} from 'react';


export const ManageDDIPage = (props) => {
	
	const navigate = (type) => {
		props.changeComponent(type);
	}

	return(
	<> 
		Manage DDI Page
		<a onClick={() => navigate('ApproveDDIPage')}>Back to Approve DDI</a>
	</>
	)
}