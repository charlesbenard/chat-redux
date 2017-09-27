export default function (state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload.messages;
    case 'CREATE_MESSAGE':
      return [...state, action.payload];
    case 'SELECT_CHANNEL':
    return [];
    default:
      return state;
  }
}
