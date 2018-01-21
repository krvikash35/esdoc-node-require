'use strict';

exports.onHandleCode = function onHandleCode(ev) {
  ev.data.code = ev.data.code
    .replace(/(let|const|var)\s+([?{,_\d\w\s?}]+)\s*=\s*require\('([./_-\d\w]+)'\)(.*)/g, "import $2 from '$3';");
};
