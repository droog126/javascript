
var addStrings = function(num1, num2) {
    var i = num1.length - 1;
    var j = num2.length - 1;
    var ans = [];
    var lst = 0;
    while (i >= 0 || j >= 0 || lst) {
        let x = i < 0 ? 0 : parseInt(num1[i]);
        let y = j < 0 ? 0 : parseInt(num2[j]);
        let r = x + y + lst;
        lst = Math.floor(r / 10);
        ans.unshift(r % 10);
        i--, j--;
    }

    return ans.join("");
};

// var num1 = "1230";
// var num2 = "1546";

// var r = addStrings(num1, num2);
// console.log(r);


var subStrings = function(num1, num2) {
    var i = num1.length - 1;
    var j = num2.length - 1;
    var ans = [];
    var lst = 0;
    while (i >= 0 || j >= 0 ) {
        let x = i < 0 ? 0 : parseInt(num1[i]);
        let y = j < 0 ? 0 : parseInt(num2[j]);
        let r = x - y - lst;
        if (r < 0) {
            lst = 1;
            r = 10 + r;
        } else {
            lst = 0;

        }
        ans.unshift(r);
        i--, j--;
    }
    if (lst) {
        var len = Math.max(num1.length, num2.length);
        var num3 = ['1'];
        for (let i = 0; i < len; i++){
            num3.push('0');
        }
        var r = subStrings(num3, ans.join(""))
        return ["-",r];
    } else {
        return ans.join("");
    }
    
};

var num1 = "230";
var num2 = "1546";

var r = subStrings(num1, num2);
console.log(r);