var twoSum = function(nums, target) {
    let answ = []
    nums.forEach((x,i)=>{
        for(let e=i+1; e<=nums.length-1; e++){
            if(x+nums[e]===target){
                answ = [i, e]
            }
        }
    })
    return answ
};
