export function wrapPromise<T, K>(promise: (args?: K) => Promise<T>) {
   let status = "pending";
   let result: T;
   let error: any;
   const suspender = promise()
      .then((res) => {
         result = res;
         status = "fulfilled";
      })
      .catch((err) => {
         error = err;
         status = "rejected";
      });
   return {
      read() {
         if (status === "pending") {
            throw suspender;
         } else if (status === "rejected") {
            return error;
         } else if (status === "fulfilled") {
            return result;
         }
      },
   };
}
