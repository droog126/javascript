/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//先手动遍历一次 然后while 循环 开始的时候遍历下一个 然后在看是否合规 不合规倒退 改变方向重新走下一步
 var spiralOrder = function(matrix) {
    
    let width=matrix[0].length;
    let height=matrix.length;
    let max_size=width*height;
    
    
    let dir=0;
    let i=0;
    let j=0;

    let m=1;
    let r=[matrix[0][0]];
    matrix[0][0]=-10;
    while(m<max_size){
        switch (dir){
            case 0:
                j++;
                break;
            case 1:           
                i++
                break;
            case 2:
                j--
                break;
            case 3:
                i--;
                break;
        }
        if( i<0 || j<0 || i>=height || j>=width || matrix[i][j]==-10 ){
            switch (dir){
                case 0:
                    j--;
                    break;
                case 1:   
                    i--;
                    break;
                case 2:
                    j++;
                    break;
                case 3:
                    i++;
                    break;
            }
            dir+=1;
            dir=dir % 4;
            switch (dir){
                case 0:
                    j++;
                    break;
                case 1:           
                    i++
                    break;
                case 2:
                    j--
                    break;
                case 3:
                    i--;
                    break;
            }
        }
        r.push(matrix[i][j]);
        matrix[i][j]=-10;
        m++
    }
    return r;
};