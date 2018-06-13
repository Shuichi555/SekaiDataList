// ボタンテキスト初期値
const initialState = 'Find your GIFs!';

// function
// const imageUrls = (state.action) => {
const buttonText = (state = initialState, action) => {
  switch (action.type) {
    // loading中の場合
    case 'START_REQUEST':
      return 'Wait...now Loading!';
    // 取得後は初期値を返す
    case 'RECEIVE_DATA':
      return initialState;

    default:
      return state;
  }
};

export default buttonText;
