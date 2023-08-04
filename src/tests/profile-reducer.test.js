import profileReducer, { actionsProfile } from "../redux/reducers/profile-reducer"

const state = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 23},
    {id: 2, message: `It's my first post`, likesCount: 1500},
    ],
    profile: null,
    status: "",
    newPostText: "",
};

describe("profile-reducer component", () => {
  test('length of posts should be incremented',() => {
    const action =  actionsProfile.addPost("Babe");
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
  });

  test('after deleting length wouldn\'t be changed if id is incorrect',() => {
    const action =  actionsProfile.removePost(1000);
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
  });

  test('message of new post should be correct',() => {
    const action =  actionsProfile.addPost("Babe");
    const newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("Babe");
  });

  test('length of after deleting length of messages should be changed',() => {
    const action =  actionsProfile.removePost(1);
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
  });
});
