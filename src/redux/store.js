
/* 
  对外暴露一个store对象，整个应用只有一个store对象。
 */

import { legacy_createStore as createStore } from 'redux'; // createStore被弃用了
import countReducer from './countReducer';


export default createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
