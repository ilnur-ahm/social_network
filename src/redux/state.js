import { rerenderEntireTree } from "../render";

let state = {
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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.NewPostText ='';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}



export default state;