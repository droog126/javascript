/*

  'aacbd' -> 'ad'
  'aabcd' -> 'ad'
  'aaabbccc' -> ''
*/

function test(str){
    str=str.replace(/b+/g,'');
    console.log(str);
    console.log(str.match(/(ac)+/g))
    while(str.match(/(ac)+/g)){
        str=str.replace(/ac/g,'');
    }
    console.log(str)
}

test('aaabbccc')