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
            <TextInput source="id" InputProps={{disabled: true}}/>
            <ReferenceInput source="userId" reference="users" link="show"/>
            <TextInput source="questiontext" multiline rows={5} />
            <TextInput source="answertext" multiline rows={5} />
            <TextInput source="status"/>
            <TextInput source="createddate"/>
            <TextInput source="createdby"/>
            <TextInput source="updateddate"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const QuestionCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"/>
            <TextInput source="questiontext" multiline rows={5} />
            <TextInput source="answertext" multiline rows={5} />
            <TextInput source="status"/>
            <TextInput source="createddate"/>
            <TextInput source="createdby"/>
            <TextInput source="updateddate"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Create>
);