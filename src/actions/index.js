export function selectBook(book) {
  //This is an ActionCreator, so it needs to return an action,
  //An object with a type property - the type describes the perpous of the action
  //actions usually have two properties, a type and a paylaod
  return {
    type: 'BOOK_SELECTED',
    payload: book 
  }
}
