import {List, Datagrid, TextField, EmailField, SimpleList} from "react-admin";
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
                </Datagrid>
            )}
        </List>
    );
};