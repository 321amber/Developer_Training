//There are four promise apis, 

//Promise.all = it waits to resolve all the promise and then give result if all promises resolved, otherwise gives only those results which are resolved and further gets ignored.

//Promise.any = it iterate over all the promises and when first promise resolve, it gives the ans of that promise.

//Promise.allSettled = if any promise rejects, gives result as rejected, otherwise wait for all the promises to resolve and gives result as fulfilled.

//Promise.race = similar to Promise.any but all promises starts resolving simultaneously, and when fist resolves, gets the answer.