
 var NumArray = function(nums) {
    this.nums = [...nums];
    this.sums = new Array(nums.length + 1).fill(0);
    this.add = function(id, v) {
        for(let i = id; i <= this.nums.length; i += i&-i) {
            this.sums[i] += v; 
        }
    }
    this.query = function(id) {
        var sum = 0;
        for(let i = id; i > 0; i -= i&-i) { 
            sum += this.sums[i]; 
        }
        return sum;
    }
    for (var i = 0; i < nums.length; i++) {
        this.add(i + 1, nums[i]);
    }
};


NumArray.prototype.update = function(index, val) {
    this.add(index + 1, val - this.nums[index]);
    this.nums[index] = val;
};


NumArray.prototype.sumRange = function(left, right) {
    return this.query(right + 1) - this.query(left);
};

//就是数组另外创建一个加法数组 修改 和更新