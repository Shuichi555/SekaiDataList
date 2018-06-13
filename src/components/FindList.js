import React, { Component } from 'react';
import axios from 'axios';

const titleStr = 'React';
const utf8Title = unescape(encodeURIComponent(titleStr));
const url = `http://iss.ndl.go.jp/api/opensearch?title=${utf8Title}?cnt=10?mediatype=1`;

/*
class FindList extends Component {
  state = {
    bookList: []
  }

*/

const geturl =  axios.get(url)
    .then( res => {
//      this.setState({ bookList: res.data });
      console.log(res.data);
    });
