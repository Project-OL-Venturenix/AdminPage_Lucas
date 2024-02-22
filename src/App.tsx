import {Admin, Resource, ShowGuesser} from "react-admin";
import {dataProvider} from './dataProvider';
import {QuestionList, QuestionEdit, QuestionCreate} from "./questions";
import {UserEdit, UserList, UserCreate} from "./users";
import authProvider from "./authProvider";
import {EventCreate, EventEdit, EventList} from "./events";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate}/>
        <Resource name="questions" list={QuestionList} edit={QuestionEdit} create={QuestionCreate}/>
        <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" edit={UserEdit} create={UserCreate}/>
    </Admin>
);