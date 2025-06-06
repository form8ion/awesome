// https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#options
exports.settings = {
  listItemIndent: 'one',
  emphasis: '_',
  strong: '_',
  bullet: '*',
  incrementListMarker: false
};

exports.plugins = [
  '@form8ion/remark-lint-preset',
  ['remark-toc', {tight: true, maxDepth: 4}]
];
