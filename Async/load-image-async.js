async function loadImageAsync(url, num) {
    console.log(num);
    let image = new Image();

    image.onload = document.body.append(image);

    image.onerror = new Error('Could not load image'); 

    image.src = url;
}

( async function appendImages() {
    await loadImageAsync('./Async/robin.jpg', 1);
    await loadImageAsync('./Async/jimmy.gif', 2);
    await loadImageAsync('./Async/sup.gif', 3);
})();