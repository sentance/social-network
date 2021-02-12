
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima', friendpic: 'https://picsum.photos/100/100/?random=20'},
          {id: 2, name: 'Sveta', friendpic: 'https://picsum.photos/100/100/?random=50'},
          {id: 3, name: 'Sergey', friendpic: 'https://picsum.photos/100/100/?random=12'},
          {id: 4, name: 'Andrey', friendpic: 'https://picsum.photos/100/100/?random=17'},
          {id: 5, name: 'Yura', friendpic: 'https://picsum.photos/100/100/?random=19'},
          {id: 6, name: 'Yura', friendpic: 'https://picsum.photos/100/100/?random=19'}
      ],
      messages: [
        {id: 1, message: 'HI'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Nice, thank you'},
        {id: 5, message: 'Nice to meet you'},
        {id: 6, message: 'Yes s'},
      ],
      newMessageBody: ''
}

const dialogsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return {...state,
            newMessageBody: action.body
          }
        case SEND_MESSAGE: 
        let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id: 10, message: body}]
        }
            
        default:
            return state;
    }
}


export const updateNewMessageBodyCreator = (text) => ( {
    type: UPDATE_NEW_MESSAGE_BODY, 
    body: text
  })
  export const sendMessageCreator = () => ( {
    type: SEND_MESSAGE, 
  })

export default dialogsReducer;