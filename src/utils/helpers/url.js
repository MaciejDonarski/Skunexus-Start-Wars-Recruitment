export const getQueryId = (url = '', index = 2) => {
  const args = url.split('/');
  return args[args.length - index];
};
