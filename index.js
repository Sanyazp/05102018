function _fetch(method, http) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, http, true);
        xhr.onload = function() {
            console.log('onload');
            if (xhr.status == 200) {
                var response = xhr.responseText;
                resolve(response);
            } else {
                reject('Error');
            }
        }
        xhr.send();
    });
}



function pause(t) {
    return new Promise(
        async function(resolve) {
            await setTimeout(() => {
                resolve(console.log('Sucefully Timeouted'));
            }, t)
        }
    )
}

document.querySelector('button').addEventListener('click', async function(e) {
    await pause(1500);
    document.querySelector('button').style.background = `red`;
})

document.getElementById('fetch').addEventListener('click', async function(e) {
    await pause(1500);
    document.getElementById('fetch').style.background = `red`;
    _fetch('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            console.log("1");
            var resp = document.createElement('h1');
            document.body.appendChild(resp);
            resp.innerHTML = response;
        })
})