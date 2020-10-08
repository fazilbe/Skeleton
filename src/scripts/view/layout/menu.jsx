import React, {useState} from 'react';
export const SideBar = (props) => {
	const [state, setState] = useState('');
	const navigate = (type) => {
		setState(type)
		props.changeComponent(type);
	}

	return(
	<> 
		<a onClick={() => navigate('ApproveDDIPage')}>Approve DDI</a>
		<a onClick={() => navigate('ManageDDIPage')}>Manage DDI</a>
	</>
	)
}