const post = (url, body, header = {}) => {
    header['Content-Type'] = 'application/json';
    let promise = new Promise( async (resolve, reject) => {
        let response = await fetch(
            url,
            {
                method: 'post',
                headers: header,
                body: JSON.stringify(body)
            }
        )
        if (response.status === 200) {
            response.json().then((data) => {
                resolve(data);
            })
        } else {
            reject(response);
        }
    });
    
    return promise;
}
export { post };