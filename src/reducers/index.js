// reducer をまとめるindexファイル

import { combineReducers } from 'redux';

import searchData from './searchData';
import buttonText from './buttonText';

export default combineReducers({ searchData, buttonText });
