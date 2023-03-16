  // import messagesReducer from "./messages-reducer";
  // import profileReducer from "./profile-reducer";
  // import sidebarReducer from "./sidebar-reducer";
 
  // const store = {

  //   _state: {
  //       profilePage: {
  //         posts: [
  //             {id: 1, message: "Hi, how are you?", likesCount: 23},
  //             {id: 2, message: "It"s my first post", likesCount: 1500},
  //             ],
  //         newPostText: "Boban Jajackay",
  //       },
  //       messagesPage: {
  //         dialogs: [
  //             {id: 1, name: "Anton",},
  //             {id: 2, name: "Yaroslav",},
  //             {id: 3, name: "Ivan",},
  //             {id: 4, name: "Sveta",}, 
  //             {id: 5, name: "Misha",},
  //             {id: 6, name: "Volodya",},
  //             ],
  //         messages: [
  //             {id: 1, message: "Hi",},
  //             {id: 2, message: "How is your it-kamasutra?",},
  //             {id: 3, message: "Yo",},
  //             {id: 4, message: "Yo",}, 
  //             {id: 5, message: "Yo",},
  //             {id: 6, message: "Yo",},
  //             ],
  //         newMessageBody: "Hello, what are you doing?",
  //       },
  //       sidebar: {

  //       },
  //     },
  //   _callSubscriber() {
  //     console.log("State changed");
  //     },

  //   getState() {
  //     return this._state;
  //     },
  //   subscribe(observer) {
  //       this._callSubscriber = observer;
  //     },

  //   dispatch(action) {

  //     this._state.profilePage = profileReducer(this._state.profilePage, action);
  //     this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
  //     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
  //     this._callSubscriber(this._state);
  //    },
  // };

  // export default store;
  // window.store = store;