// Add your code here
submitData = function(userName, userEmail) {
    return fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            Accept: "application/json",
        },
        body:JSON.stringify({name: userName, email: userEmail}),
    })
    .then(res => res.json())
    .then(userData => document.querySelector('p').textContent = userData.id)
    .catch(function(error){
        alert('Something is wrong here!!!');
        return document.querySelector('p').textContent = error.message
    })
}