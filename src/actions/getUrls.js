import callApi from '../APIs/callApi';

// #68 for buttonText
//action creater　に typeのみセット
const startRequest = () => {
  return {
    type: "START_REQUEST"
  };
};

//action creater　を使用して　action の中でデータ保持する
const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

// word(URL)を引数に取る
//function を返す必要がある
const getUrls = word => {
  return dispatch => {
    // #68 add dispatch for buttonText
    dispatch(startRequest());

    //promise オブジェクトが返ってくる
    callAPI(word).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);

      //dispatch してaction の中でデータ保持する
      dispatch(receiveData(imageUrlList));
    });
  };
};

export default getUrls;
