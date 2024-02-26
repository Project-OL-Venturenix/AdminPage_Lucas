import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleForm,
    ReferenceInput,
    Edit,
    TextInput, Create
} from "react-admin";

export const GroupUserList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="groupid"/>
            <TextField source="userid"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const GroupUserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}}/>
            <TextInput source="groupid" required/>
            <TextInput source="userid" required/>
            <TextInput source="status"/>
            <TextInput source="createddate"/>
            <TextInput source="createdby"/>
            <TextInput source="updateddate"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const GroupUserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="groupid" required/>
            <TextInput source="userid" required/>
            <TextInput source="status"/>
            <TextInput source="createddate"/>
            <TextInput source="createdby"/>
            <TextInput source="updateddate"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Create>
);