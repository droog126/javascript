//arguments 能穿透arguments  且argumens是个object
const parent = function() {
    const result = [];
    console.log(arguments);
    const child = function(){
        console.log(arguments);
        for (let num of arguments) {
            result.push(num);
        }
        return result;
    }

    return child(1, 2, 3);
}

const result = parent(4, 5, 6, 7);
console.log(JSON.stringify(result));