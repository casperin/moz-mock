//define(function (require) {
//return function () {
//return "<h1>The new CREAT0R!</h1>";
//};
//});

'use strict';

define(function (require) {
    return function () {

        function double(x) {
            return x * 2;
        }

        return React.createElement('div', { id: 'foo', className: 'bar' });

        var dd = function dd(x) {
            return x * 2;
        };

        var text = 'creator';

        return '<h1>' + text + '</h1>';
    };
});
//# sourceMappingURL=app.js.map