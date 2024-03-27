import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReduser from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { applyMiddleware } from "redux";
import  thunkMiddleware  from "redux-thunk";
import { reducer as formReducer} from 'redux-form';
import appReducer from "./appReduscer";
import { compose } from "redux";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;