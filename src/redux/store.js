import profileReducer from "./profileReducer";
import dialogsReduser from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: "It's my first post", likesCount: 21 },
                { id: 3, message: "It's", likesCount: 2 },
                { id: 4, message: "It", likesCount: 1 }
            ],
            newPostText: 'Hi'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Azat' },
                { id: 2, name: 'Damir' },
                { id: 3, name: 'Ilya' },
                { id: 4, name: 'Karina' },
                { id: 5, name: 'Ramis' },
                { id: 6, name: 'Dasha' },
                { id: 7, name: 'Ildar' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            newMessageBody: '' 
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('state changed')
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store=store;