export const getQueryId = (url = '', index = 2) => {
  const args = url.split('/');
  return args[args.length - index];
};

export const getQueryParams = (url) => {
  const args = url.split('?');
  return args[1];
};
