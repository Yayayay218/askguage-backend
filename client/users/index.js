import React from 'react';
import {
    Create,
    Edit,
    List,
    SimpleForm,
    FormTab,
    TabbedForm,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    ImageInput,
    ImageField,
    BooleanField,
    SelectInput,
    BooleanInput,
    NumberInput
} from 'admin-on-rest';
import RoleField from './RoleField'
import {required} from 'admin-on-rest'

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="firstName" label="First Name"/>
            <TextField source="lastName" label="Last Name"/>
            <TextField source="email"/>
            <TextField source="phoneNumber" />
            <RoleField source="role"/>
            <DeleteButton/>
        </Datagrid>
        {/*<CustomDragGrid/>*/}
    </List>
);