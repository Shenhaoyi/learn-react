
/* 
  对外暴露一个store对象，整个应用只有一个store对象。
 */

import { legacy_createStore as createStore } from 'redux'; // createStore提示被弃用了
import countReducer from './countReducer';


export default createStore(countReducer);
