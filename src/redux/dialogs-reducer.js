
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
      ]
}

const dialogsReducer = (state = initialState, action)=>{
    switch (action.type) {

        case SEND_MESSAGE: 
        let body = action.newMessageBody;
        return {
            ...state,
           messages: [...state.messages, {id: 10, message: body}]
        }
            
        default:
            return state;
    }
}



  export const sendMessageCreator = (newMessageBody) => ( {
    type: SEND_MESSAGE, 
    newMessageBody
  })

export default dialogsReducer;