export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload
    //if the action type is BOOK_SELECTED, we return the action payload
    //which is just book
  }
  return state;
  //it is important not to mutate the state
}
