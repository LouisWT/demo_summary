function Promise(func) {
  function resolve(value) {
    return value;
  }
  function reject(err) {
    throw err;
  }
  function thenable(value, err) {
    const then = (fullfill, reject) => {
      let rValue;
      let rErr;
      if (!err) {
        try {
          rValue = fullfill.call(null, value);
        } catch (err) {
          rErr = err;
        }
      } else {
        try {
          reject.call(null, err);
        } catch {
          rErr = err;
        }
      }
      return thenable(rValue, rErr);
    }
    const cat = function (errProcss) {
      try {
        errProcss.call(null, err);
      } catch(rErr) {
        throw rErr;
      }
    }
    return {
      then,
      catch: cat,
    }
  }

  let value;
  let err;
  try {
    value = func.call(null, resolve, reject);
  } catch (err) {
    err = err;
  }

  return {
    then: thenable(value, err),
  }
}

