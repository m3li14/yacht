import React from 'react';
import definition from './definition';
import RecordsManager from '../RecordsManager/RecordsManager';

const CustomersManager = ({fbUser}) => {
    return (
        <RecordsManager fbUser={fbUser} definition={definition} />
    )

}

export default CustomersManager;