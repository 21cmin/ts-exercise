// const someElement = document.querySelector('.foo') as HTMLInputElement
const someElement = document.querySelector('.foo')

// console.log('some element: ', someElement.value);

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event: ', target.value);
    
})