// const someElement = document.querySelector('.foo') as HTMLInputElement
var someElement = document.querySelector('.foo');
// console.log('some element: ', someElement.value);
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event: ', target.value);
});
