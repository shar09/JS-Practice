function loadImagePromise(url) {
    let promise = new Promise( (resolve, reject) => {

        let image = new Image();

        image.onload = function() {
            resolve(image);
        }

        image.onerror = function() {
            reject(new Error('Could not load image'));
        }

        image.src = url;

    });
    return promise;
}

// loadImagePromise('./Async/robin.jpg').then( image => {
//     document.body.append(image);
//     loadImagePromise('./Async/sup.gif').then( image => {
//         document.body.append(image);
//         loadImagePromise('Async/jimmy.gif').then( image => {
//             document.body.append(image);
//         }).catch( error => {
//             throw error;
//         });
//     }).catch( error => {
//         throw error;
//     });
// }).catch( error => {
//     throw error;
// });

Promise.all([loadImagePromise('./Async/robin.jpg'),
    loadImagePromise('./Async/sup.gif'),
    loadImagePromise('Async/jimmy.gif')
]).then( images => {
    images.forEach(image => {
        document.body.append(image)
    });
}).catch(error => {
    throw error;
});
