const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FjY2Vzcy5saW5lLm1lIiwic3ViIjoiVTM2YjY0ODFhMGIzNjIyNzA5NzI3ZWU1ZjkwNWM2NWVlIiwiYXVkIjoiMTY1NzQ2MjI1MSIsImV4cCI6MTY2MzM1NTEwNywiaWF0IjoxNjYzMzUxNTA3LCJhbXIiOlsibGluZXNzbyJdLCJuYW1lIjoi5a626LGqIPCfmLwgSG93YXJkIiwicGljdHVyZSI6Imh0dHBzOi8vcHJvZmlsZS5saW5lLXNjZG4ubmV0LzBoRkJ5ekxNVkpHVzFFQXc2Zlh1Um1PbmhHRndBekxSOGxQRElEQ0RNTFJRMXROMWM5ZTJVR0QySUVUZzFwWndvNUtqWmZEV1ZYRlZWaCIsImVtYWlsIjoicGF1bDg2MDEwOEB5YWhvby5jb20udHcifQ.SZag63nwc1YWF8cOHtikE0_xTnz_pn-jLSgobmV4CIw';
const payload = JSON.parse(atob(token.split('.')[1]));
const expDate = new Date(new Date(0).setUTCSeconds(payload.exp)); // 得到正常的js日期時間
console.log(payload);
console.log(expDate);
