// fetch(`https://api.github.com/users/shar09`)
//   // Load the response as json
//   .then(response => response.json())
//   // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout( () => {
//         img.remove();
//         alert(`Finished showing ${githubUser.name}`);
//     }, 3000); // (*)
// });

// ------Change above code to:------------

fetch(`https://api.github.com/users/shar09`)
  // Load the response as json
  .then(response => response.json())
  // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
  .then(githubUser => {
    console.log(githubUser); 
    return new Promise( (resolve, reject) => {

        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
        
        if(!githubUser){
            reject(new Error("Could not load user"));
        }
        setTimeout( () => {
            img.remove();
            resolve(githubUser);
        }, 3000); // (*)
    })
    .then(githubUser => {
        alert(`hello ${githubUser.name}`);
    })
});

