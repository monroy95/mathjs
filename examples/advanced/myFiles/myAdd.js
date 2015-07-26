// Note: This file is loaded and used by example ../import_new_datatypes.js

function factory (type, config, load, typed) {
  // create a new typed function using MyType
  // when imported in math.js, this will extend the
  // existing function `add` with support for MyType
  return typed('add', {
    'MyType, MyType': function (a, b) {
      return new type.MyType(a.value + b.value);
    }
  });
}

exports.name = 'add';
exports.factory = factory;
