import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";


let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 21 },
        { id: 3, message: "It's", likesCount: 2 },
        { id: 4, message: "It", likesCount: 1 }
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('hi hi hi')

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
})

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})