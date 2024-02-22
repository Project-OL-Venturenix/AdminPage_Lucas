import {Admin, Resource, ShowGuesser} from "react-admin";
import {dataProvider} from './dataProvider';
import {QuestionList, QuestionEdit, QuestionCreate} from "./questions";
import {UserEdit, UserList, UserCreate} from "./users";
import authProvider from "./authProvider";
import {EventCreate, EventEdit, EventList} from "./events";
import {EventGroupCreate, EventGroupEdit, EventGroupList} from "./eventgroups";
import {EventQuestionCreate, EventQuestionEdit, EventQuestionList} from "./eventquestions";
import {EventUserCreate, EventUserEdit, EventUserList} from "./eventusers";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate}/>
        <Resource name="eventgroups" list={EventGroupList} edit={EventGroupEdit} create={EventGroupCreate}/>
        <Resource name="eventquestions" list={EventQuestionList} edit={EventQuestionEdit} create={EventQuestionCreate}/>
        <Resource name="eventusers" list={EventUserList} edit={EventUserEdit} create={EventUserCreate}/>
        <Resource name="questions" list={QuestionList} edit={QuestionEdit} create={QuestionCreate}/>
        <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" edit={UserEdit}
                  create={UserCreate}/>
    </Admin>
);