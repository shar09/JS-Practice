const loadImageCb = (url, callback) => {

    let image = new Image();

    image.onload = function() {
        callback(null, image);
    }

    image.onerror = function() {
        callback(new Error(`Could not load image at ${url}`));
    }

    image.src = url;
}

loadImageCb('./Async/robin.jpg', function(error, image) {
    if(error)
        throw error;
    document.body.append(image);      
    loadImageCb('./Async/sup.gif', function(error, image) {
        if(error)
            throw error;
        document.body.append(image);    
        loadImageCb('./Async/jimmy.gif', function(error, image) {
            if(error)
                throw error;
            document.body.append(image); 
        });
        loadImageCb('./Async/xyz', function(error, image) {
            if(error)
                throw error;
            document.body.append(image); 
        });
    });
});





// Notes:
// * If img.src is set before onload, there is a possibilty of onload event no firing at all if img loads quickly
// Callbacks to call loadImage one after another


















// What is loadImage?
// load image is a function, that accepts a url, callback as parameters and returns an image if succees
// otherwise returns an error