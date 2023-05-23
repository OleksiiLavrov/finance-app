export const convertAmount = (num: number) => {
   let str: string = num.toString();
   if (str.length < 3) return 0;
   return parseInt(str.slice(0, -2));
};
