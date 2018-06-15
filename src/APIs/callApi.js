import axios from "axios";

//arrow functionにする, wordを引数として検索内容searchに反映
const callApi = (word, num) => {
  // リクエスト先URL作成
  const search = word;
  const limit = num;
  const url = `https://qiita.com/api/v2/tags/${search}/items?page=1&per_page=${limit}`;

  // Promiseオブジェクトを返す必要がある
  return axios.get(url);
};

export default callApi;
