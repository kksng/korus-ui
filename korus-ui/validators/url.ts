
// eslint-disable-next-line max-len
const urlRegExp = new RegExp([
  '^',
  // protocol identifier - optional
  // short syntax - still required
  '(?:(?:(?:https?|ftp):)?\\/\\/)?',
  // user:pass basicauth - optional
  '(?:\\S+(?::\\S*)?@)?',
  '(?:',
  // ip address exclusion
  // private and local networks
  '(?!(?:10|127)(?:\\.\\d{1,3}){3})',
  '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})',
  '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})',
  // ip address dotted notation octets
  // excludes loopback network 0.0.0.0
  // excludes reserved space greater or equal 224.0.0.0
  // excludes a network and broadcast addresses
  // first and last ip address of each class
  '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])',
  '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}',
  '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))',
  '|',
  // host and domain names may end with dot
  // can be replaced by shortest alternative
  // (?![-_])(?:[-\\w\\u00a1-\\uffff]{0,63}[^-_]\\.)+
  '(?:',
  '(?:',
  '(?:',
  '[a-z0-9\\u00a1-\\uffff]',
  '[a-z0-9\\u00a1-\\uffff_-]{0,62}',
  ')?',
  '[a-z0-9\\u00a1-\\uffff]\\.',
  ')+',
  // tld identifier nam may end with dot
  '(?:[a-z\\u00a1-\\uffff]{2,}\\.?)',
  ')',
  '|',
  'localhost',
  ')',
  // port number - optional
  '(?::\\d{2,5})?',
  // resource path - optional
  '(?:[/?#]\\S*)?',
  '$',
].join(''), 'i');

export const validateUrl = (value: string): boolean => urlRegExp.test(value);
