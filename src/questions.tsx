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
            <TextField source="question"/>
            <TextField source="testComputeCase"/>
            <TextField source="methodSignatures"/>
            <TextField source="targetCompleteTime"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const QuestionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="questionId" InputProps={{disabled: true}}/>
            <TextInput source="question" multiline rows={5} />
            <TextInput source="testComputeCase" multiline rows={5} />
            <TextInput source="methodSignatures" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const QuestionCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="question" multiline rows={5} />
            <TextInput source="testComputeCase" multiline rows={5} />
            <TextInput source="methodSignatures" multiline rows={5} />
        </SimpleForm>
    </Create>
);