import usersReducer, { InitialStateType, actionsUsers } from './../redux/reducers/users-reducer'
let state: InitialStateType; 
beforeEach(() => {
   state = 
   {users: [
        {id: 0, name: "alal", followed: false,
        photos: {small: null, large: null}, status: "status 0"},
        {id: 1, name: "Mama", followed: false,
        photos: {small: null, large: null}, status: "status 1"},
        {id: 2, name: "KKKK", followed: true,
        photos: {small: null, large: null}, status: "status 2"},
        {id: 3, name: "LLaa", followed: false,
        photos: {small: null, large: null}, status: "status 3"},
    ],
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    filter: {
        term: "",
        friend: null as null | boolean 
      }
    };
}) 

test("follow success", () => {
    const  newState = usersReducer(state, actionsUsers.followSuccess(1));
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});
test("unfollow success", () => {
    const  newState = usersReducer(state, actionsUsers.unfollowSuccess(3));
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[3].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeTruthy();
});
