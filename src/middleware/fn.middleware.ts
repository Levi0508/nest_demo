export function fnMiddleware(req, res, next) {
  console.log(`fnMiddleware...`);
  next();
}
