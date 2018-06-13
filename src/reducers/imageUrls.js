// const initialState = [1, 2, 3, 4, 5];
const initialState = [];

// function
// const imageUrls = (state.action) => {
const imageUrls = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      // changed for using action object
      // return "data";
      return action.payload;

    default:
      return state;
  }
};

export default imageUrls;
