// middleware
const oneMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  // 如果不是自己感兴趣的action，则调用之后的中间件
  if (typeof action !== "这个中间件感兴趣的action") {
    return next(action)
  }
  // 对这个action进行特殊处理，比如拦截异步操作 (callAPI 是action传进来的)
  dispatch(Object.assign({}, payload, {
    type: requestType
  }))

  return callAPI().then(
    response => dispatch(Object.assign({}, payload, {
      response,
      type: successType
    })),
    error => dispatch(Object.assign({}, payload, {
      error,
      type: failureType
    }))
  )
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

const promiseMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  return isPromise(action.payload) ?
    action.payload.then(
      function (result) {
        action.payload = result;
        return dispatch(action);
      },
      function (error) {
        action.payload = error;
        return dispatch(action);
      })
    : next(action);
};