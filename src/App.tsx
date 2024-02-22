import {Admin, Resource, ShowGuesser} from "react-admin";
import {dataProvider} from './dataProvider';
import {QuestionList, QuestionEdit, QuestionCreate} from "./questions";
import {UserList} from "./users";
import authProvider from "./authProvider";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="questions" list={QuestionList} edit={QuestionEdit}/>
        <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name"/>
    </Admin>
);