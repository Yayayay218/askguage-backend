import React from 'react';
import PropTypes from 'prop-types';

const RoleField = ({record = {}}) => {
    let role = record.role;
    if(role == 0)
        role = 'Customer'
    else if(role == 1)
        role = 'Service Provider'
    else
        role = 'Admin'
    return <span>{role}</span>
};

RoleField.PropTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired
};

export default RoleField;