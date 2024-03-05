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

export const TestCaseList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="questionId"/>
            <TextField source="expectedOutput"/>
            <TextField source="input1"/>
            <TextField source="input2"/>
            <TextField source="input3"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const TestCaseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}}/>
            <TextInput source="questionId"/>
            <TextInput source="expectedOutput"/>
            <TextInput source="input1"/>
            <TextInput source="input2"/>
            <TextInput source="input3"/>
        </SimpleForm>
    </Edit>
);

export const TestCaseCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="questionId"/>
            <TextInput source="expectedOutput"/>
            <TextInput source="input1"/>
            <TextInput source="input2"/>
            <TextInput source="input3"/>
        </SimpleForm>
    </Create>
);