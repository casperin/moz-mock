require(['app'], function (app) {
    var container = document.getElementById('container');

    container.innerHTML = app();
});
