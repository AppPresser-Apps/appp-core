import { a as patchEsm, b as bootstrapLazy } from './index-b741b827.js';
var defineCustomElements = function (win, options) { return patchEsm().then(function () {
    return bootstrapLazy([["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
}); };
export { defineCustomElements };
