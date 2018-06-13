import axios from "axios";

//arrow functionにする, wordを引数として検索内容searchに反映
const callApi = word => {
  // リクエスト先URL作成
  const search = word;
  const key = "6XZoTZrPLUXTctbnU0FzIKBXME4kbfZT";
  const limit = 20;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  // Promiseオブジェクトを返す必要がある
  return axios.get(url);
};
/*Gighy2 ではaction creater内で実行
  // axios でリクエストする
  axios.get(url).then(res => {
    const data = res.data.data;

    //url 配列を作る
    const imageUrlList = data.map

    // state　を、取得した情報をもとに変更する
    this.setState({gifUrlList: })
*/

export default callApi;
