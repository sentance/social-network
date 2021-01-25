const  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
let store = {
  _state: {
    profilePage: {
        postData: [
            {id: 1, text: 'Helodslodl', likeCount: 23, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 2, text: 'UkIdslld s d', likeCount: 21, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'},
            {id: 3, text: 'Hsdu asdiasdl', likeCount: 2, img: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'}
          ],
          newPostText: 'It-magic, bro'
    },
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
    messagePage: {
        messagesData: [
            {id: 1, text: 'Hello'},
            {id: 2, text: 'WInnad deusty'},
            {id: 3, text: 'Irakli monna'},
            {id: 4, text: 'Oreno hukol'},
            {id: 5, text: 'Vukasdi iweirwer'},
          ],
          dialogsData: [
            {id: 1, name: 'Dima', friendpic: 'https://picsum.photos/100/100/?random=20'},
            {id: 2, name: 'Sveta', friendpic: 'https://picsum.photos/100/100/?random=50'},
            {id: 3, name: 'Sergey', friendpic: 'https://picsum.photos/100/100/?random=12'},
            {id: 4, name: 'Andrey', friendpic: 'https://picsum.photos/100/100/?random=17'},
            {id: 5, name: 'Yura', friendpic: 'https://picsum.photos/100/100/?random=19'}
          ]
    }
    
     
  },
  getState(){
    return this._state;
  },
  callSubscriber (){
    console.log('state was changed')
  },
  subcribe (observer) {
    this._callSubscriber = observer
  },
  dispatch(action){
      if(action.type === ADD_POST) {
        let newPost = {
          id: 19,
          text: this._state.profilePage.newPostText,
          likeCount: 0,
          img: 'https://picsum.photos/100/100/?random=67'
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = ' ';
      this._callSubscriber(this._state);
    }else if (action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator =()=> ({ type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ( {type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;
window.store = store;