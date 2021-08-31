var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'


const parseParem = (url) => {
    const arr = url.split('?')[1].split('&');
    const res = {};
    arr.forEach((e) => {
        let key = e.split('=')[0], value = e.split('=')[1];
        if (value === undefined) {
            res[key] = true;
        } else {
            if (key in res) {
                Array.isArray(res[key]) 
                ? res[key].push(value) 
                : res[key] = [res[key]].concat(value);
            } else {
                res[key] = decodeURI(value)
            }
        }
    })
    return res;
}

console.log(parseParem(url))