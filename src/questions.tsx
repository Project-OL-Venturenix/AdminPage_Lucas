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

export const QuestionList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField source="userId" reference="users" link="show"/>
            <TextField source="questiontext"/>
            <TextField source="answertext"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const QuestionEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceField source="userId" reference="users" link="show"/>
            <TextField source="questiontext"/>
            <TextField source="answertext"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const QuestionCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"/>
            <TextInput source="title"/>
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Create>
);