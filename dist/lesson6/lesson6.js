var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var me = {
    name: "jack",
    data: { meta: "foo" },
    meta: 'bar'
};
var me2 = {
    name: 'Jogn',
    data: ['foo', 'bar', 'bax'],
    meta: 'bar'
};
var result = addId(me);
console.log("result:", result);
