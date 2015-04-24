//define(function (require) {
    //return function () {
        //return "<h1>The new CREAT0R!</h1>";
    //};
//});

define(require => () => {

    function double (x: Number):Number {
        return x * 2;
    }

    return (
        <div id='foo' className='bar'></div>
    );

    const dd = x => x*2;

    const text = "creator";

    return `<h1>${text}</h1>`;
});
