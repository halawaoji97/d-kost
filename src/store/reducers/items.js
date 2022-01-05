const INITIAL_STATE = {};
export default (items = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'FETCH_DETAIL':
      return items.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    default:
      return items;
  }
};

// return posts.map((post) =>
//         post._id === action.payload._id ? action.payload : post
//       );
