/* 
  为count功能服务的reducer，reducer就是个函数 
*/

const initialValue = 0;
// 初始化的时候接收的preValue是undefined，通过参数默认值进行初始化，初始化时type是随机生产的
const countReducer = (preValue = initialValue, action) => {
  const { type, data } = action;
  // 根据action type来处理数据
  switch (type) {
    case 'add':
      return preValue + data;
    case 'minus':
      return preValue - data;
    default:
      return preValue;
  }
};

export default countReducer;
