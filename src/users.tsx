import {
    List,
    Datagrid,
    TextField,
    EmailField,
    SimpleList,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput, Create, EditButton
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

// export const UserList = () => (
    // <List>
    //     <Datagrid rowClick="edit">
    //         <TextField source="id" />
    //         <TextField source="name" />
    //         <TextField source="username" />
    //         <EmailField source="email" />
    //         <TextField source="address.street" />
    //         <TextField source="phone" />
    //         <TextField source="website" />
    //         <TextField source="company.name" />
    //     </Datagrid>
    // </List>

    // <List>
    //     <SimpleList
    //         primaryText={(record) => record.name}
    //         secondaryText={(record) => record.username}
    //         tertiaryText={(record) => record.email}
    //     />
    // </List>
export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="show">
                    <TextField source="id" />
                    <TextField source="firstname" />
                    <TextField source="lastname" />
                    <EmailField source="mobile" />
                    <TextField source="email" />
                    <TextField source="username" />
                    <TextField source="company" />
                    <TextField source="title" />
                    <TextField source="status"/>
                    <TextField source="createddate" />
                    <TextField source="title" />
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
};

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}}/>
            <ReferenceInput source="userId" reference="users" link="show"/>
            <TextInput source="id" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput  source="mobile" />
            <TextInput source="email" />
            <TextInput source="username" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="firstname" required/>
            <TextInput source="lastname" required/>
            <TextInput source="status" required/>
            <TextInput  source="mobile" required/>
            <TextInput source="email" required/>
            <TextInput source="username" required/>
            <TextInput source="company" required/>
            <TextInput source="password" required/>
            <TextInput source="title" required/>
        </SimpleForm>
    </Create>
);