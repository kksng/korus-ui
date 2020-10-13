import { create } from '@storybook/theming';

export const editorTheme = {
  plain: {
    color: '#fff',
    backgroundColor: '#011627',
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: '#809393',
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#ffa7c4',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: '#ff5874',
      },
    },
    {
      types: ['number'],
      style: {
        color: '#f78c6c',
      },
    },
    {
      types: ['inserted', 'selector', 'string', 'attr-name', 'entity', 'url'],
      style: {
        color: '#addb67',
      },
    },
    {
      types: ['atrule', 'keyword', 'important', 'deleted', 'tag'],
      style: {
        color: '#ffa7c4',
        verticalAlign: 'initial',
      },
    },
    {
      types: ['placeholder', 'variable'],
      style: {
        color: '#fff',
      },
    },
    {
      types: ['punctuation', 'symbol', 'interpolation-punctuation'],
      style: {
        color: '#c792ea',
      },
    },
    {
      types: ['function', 'function-variable', 'constant'],
      style: {
        color: '#82aaff',
        fontStyle: 'bold',
      },
    },
  ],
};

export const storybookTheme = create({
  base: 'dark',
  colorPrimary: 'hotpink',
  colorSecondary: 'rgb(87,194,224)',
  textColor: 'white',
  barTextColor: 'rgb(87,194,224)',
  appBorderColor: 'rgb(87,194,224)',
  brandTitle: 'Leda',
  brandUrl: 'https://leda.esphere.ru',
  brandImage: '/favicon.ico',
});


export const overreactedTheme = {
  'code[class*="language-"]': {
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    whiteSpace: 'pre-wrap',
    wordWrap: 'normal',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontSize: '14px',
    color: '#fff',
    textShadow: 'none',
  },
  'pre[class*="language-"]': {
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    whiteSpace: 'pre-wrap',
    wordWrap: 'normal',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontSize: '14px',
    color: '#fff',
    textShadow: 'none',
    background: '#011627',
    padding: '15px',
    borderRadius: '4px',
    border: '1px solid #e1e1e8',
    overflow: 'auto',
    position: 'relative',
  },
  ':not(pre)>code[class*="language-"]': {
    background: '#011627',
    padding: '0.15em 0.2em 0.05em',
    borderRadius: '.3em',
    border: '0.13em solid #7a6652',
    boxShadow: '1px 1px 0.3em -0.1em #000 inset',
  },
  'pre[class*="language-"] code': {
    whiteSpace: 'pre',
    display: 'block',
  },
  namespace: {
    Opacity: '.7',
  },
  comment: {
    color: '#809393',
  },
  prolog: {
    color: '#809393',
  },
  doctype: {
    color: '#809393',
  },
  cdata: {
    color: '#809393',
  },
  operator: {
    color: '#ffa7c4',
  },
  boolean: {
    color: '#ff5874',
  },
  number: {
    color: '#f78c6c',
  },
  'attr-name': {
    color: '#addb67',
  },
  entity: {
    color: '#addb67',
    cursor: 'help',
  },
  url: {
    color: '#addb67',
  },
  '.language-css .token.string': {
    color: '#addb67',
  },
  '.style .token.string': {
    color: '#addb67',
  },
  string: {
    color: '#addb67',
  },
  selector: {
    color: '#addb67',
  },
  inserted: {
    color: '#addb67',
  },
  'attr-value': {
    color: '#ffa7c4',
  },
  atrule: {
    color: '#ffa7c4',
  },
  keyword: {
    color: '#ffa7c4',
  },
  important: {
    color: '#ffa7c4',
    fontWeight: 'bold',
  },
  deleted: {
    color: '#ffa7c4',
  },
  placeholder: {
    color: '#fff',
  },
  variable: {
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
  punctuation: {
    color: '#c792ea',
  },
  'interpolation-punctuation': {
    color: '#c792ea',
  },
  function: {
    color: '#82aaff',
  },
  'function-variable': {
    color: '#82aaff',
  },
  constant: {
    color: '#82aaff',
  },
  tag: {
    color: '#ffa7c4',
  },
  italic: {
    fontStyle: 'italic',
  },
  'code.language-markup': {
    color: '#f9f9f9',
  },
  'code.language-markup .token.tag': {
    color: '#ef3b7d',
  },
  'code.language-markup .token.attr-name': {
    color: '#a6e22d',
  },
  'code.language-markup .token.attr-value': {
    color: '#e6d06c',
  },
  'code.language-markup .token.style': {
    color: '#76d9e6',
  },
  'code.language-markup .token.script': {
    color: '#76d9e6',
  },
  'code.language-markup .token.script .token.keyword': {
    color: '#76d9e6',
  },
  'pre[class*="language-"][data-line]': {
    position: 'relative',
    padding: '1em 0 1em 3em',
  },
  'pre[data-line] .line-highlight': {
    position: 'absolute',
    left: '0',
    right: '0',
    padding: '0',
    marginTop: '1em',
    background: 'rgba(255, 255, 255, 0.08)',
    pointerEvents: 'none',
    lineHeight: 'inherit',
    whiteSpace: 'pre',
  },
  'pre[data-line] .line-highlight:before': {
    content: 'attr(data-start)',
    position: 'absolute',
    top: '.4em',
    left: '.6em',
    minWidth: '1em',
    padding: '0.2em 0.5em',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    color: 'black',
    font: 'bold 65%/1 sans-serif',
    height: '1em',
    lineHeight: '1em',
    textAlign: 'center',
    borderRadius: '999px',
    textShadow: 'none',
    boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
  },
  'pre[data-line] .line-highlight[data-end]:after': {
    content: 'attr(data-end)',
    position: 'absolute',
    top: 'auto',
    left: '.6em',
    minWidth: '1em',
    padding: '0.2em 0.5em',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    color: 'black',
    font: 'bold 65%/1 sans-serif',
    height: '1em',
    lineHeight: '1em',
    textAlign: 'center',
    borderRadius: '999px',
    textShadow: 'none',
    boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
    bottom: '.4em',
  },
};
