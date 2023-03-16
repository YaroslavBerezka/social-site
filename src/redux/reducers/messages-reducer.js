const SEND_MESSAGE = "SEND-MESSAGE";
const REMOVE_MESSAGE = "REMOVE-MESSAGE";

let initialState = {

    dialogs: [
        {id: 1, name: "Anton",},
        {id: 2, name: "Yaroslav",},
        {id: 3, name: "Ivan",},
        {id: 4, name: "Sveta",}, 
        {id: 5, name: "Misha",},
        {id: 6, name: "Volodya",},
        ],
    messages: [
        {id: 1, message: "Hi",},
        {id: 2, message: "How is your it-kamasutra?",},
        {id: 3, message: "Yo",},
        {id: 4, message: "Yo",}, 
        {id: 5, message: "Yo",},
        {id: 6, message: "Yo",},
        ],
};

const messagesReducer = (state = initialState , action) => {

    switch(action.type) {
        case SEND_MESSAGE: 
            return {
                ...state,
                messages: [
                    ...state.messages, 
                    {id: state.messages.length + 1,
                    message: action.payload,},
                ],
            };
        case REMOVE_MESSAGE: 
            return {
                ...state,
                messages: state.messages.filter((_,index) => index !== state.messages.length - 1),
                newMessageBody: "",
            };
        default:
            return state;
    }
    
};

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, payload: newMessageBody });
export const removeMessage = () => ({type: REMOVE_MESSAGE, });


export default messagesReducer;