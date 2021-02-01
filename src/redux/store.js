import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
        postData: [
            {id: 1, text: 'Helodslodl', likeCount: 23, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 2, text: 'UkIdslld s d', likeCount: 21, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 3, text: 'Hsdu asdiasdl', likeCount: 2, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'}
          ],
          newPostText: 'It-magic, bro',
          frindavatar: [
            {id: 1,friendpic: 'https://picsum.photos/100/100/?random=1'},
            {id: 2,friendpic: 'https://picsum.photos/100/100/?random=4'},
            {id: 3,friendpic: 'https://picsum.photos/100/100/?random=50'},
            {id: 4,friendpic: 'https://picsum.photos/100/100/?random=50'},
            {id: 5,friendpic: 'https://picsum.photos/100/100/?random=70'},
            {id: 6,friendpic: 'https://picsum.photos/100/100/?random=90'},
            {id: 7,friendpic: 'https://picsum.photos/100/100/?random=10'},
            {id: 9,friendpic: 'https://picsum.photos/100/100/?random=60'},
        ],
    },

    dialogsPage: {
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
          {id: 6, message: 'Yes'},
        ],
        newMessageBody: ''
    },
    sidebar: {}
    
     
  },
  getState(){
    return this._state;
  },
  callSubscriber (){
    console.log('state was changed')
  },
  subscribe (observer) {
    this._callSubscriber = observer
  },
  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}



export default store;
window.store = store;