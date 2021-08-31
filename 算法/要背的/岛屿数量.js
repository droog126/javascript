/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let height=grid.length;
    let width=grid.length;
    let num=0;


    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
          
            if(grid[i][j]==1){
               
                num+=1;
                land_num(grid,i,j,height,width);
            }
        }
    }

    console.log(grid)
    return num
};

function land_num (grid,i,j,x,y){
    if(i<0 || i>=x || j<0 ||j>=y){return }
    if (grid[i][j]){
        grid[i][j]=0;
        land_num(grid,i-1,j,x,y);
        land_num(grid,i+1,j,x,y);
        land_num(grid,i,j-1,x,y);
        land_num(grid,i,j+1,x,y);
    }
   
}