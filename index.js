function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(function(response) {
        return response.json();
    })    
    .then(function(object) {
        let newUser = object;
        const p = document.createElement('p');
        p.innerHTML = object.id;
        document.body.appendChild(p);
    })
    .catch(function(error) {
        const pError = document.createElement('p');
        pError.innerHTML = error.message
        document.body.appendChild(pError);
    }) 
}

submitData("Kate", "peterson@gmail.com")
