function missingNumber(nums) {
    const n = nums.length;
  
    // Cyclic sorting
    for (let i = 0; i < n; i++) {
      while (nums[i] !== i && nums[i] < n) {
        // Swap the number to its correct position
        const temp = nums[i];
        nums[i] = nums[temp];
        nums[temp] = temp;
      }
    }
  
    // Find the missing number
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i) {
        return i;
      }
    }
  
    // If no missing number found, return n
    return n;
  }


//   **********************************************************************************

function findDuplicates(nums) {
    const duplicates = [];
  
    let i = 0;
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
  
      // If the number is not in its correct position and it's not a duplicate
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
        // If the number is in its correct position, move to the next index
        i++;
      }
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        duplicates.push(nums[i]);
      }
    }
  
    return duplicates;
  }

  //   **********************************************************************************

  var findErrorNums = function(nums) {
    for (let i = 0; i < nums.length; i++) {
      while (nums[i] !== i + 1) {
        const correctIndex = nums[i] - 1;
        if (nums[i] === nums[correctIndex]) {
          break; // 
        }
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // Swap
      }
    }
  
    let duplicate, missing;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        duplicate = nums[i]; // Found the number that occurs twice
        missing = i + 1; // Missing number is the expected value at this index
        break;
      }
    }
  
    return [duplicate, missing];
  };

    //   **********************************************************************************

    var twoSum = function(nums, target) {
        let left=0;
        let right = nums.length-1
        while(left<right){
            const sum=nums[left]+nums[right];
            if(sum===target){
                return [left+1,right+1];
            }
           else if(sum<target){
                left++;
            }
            else{ right --}
        }
        return [];
    };

        //   **********************************************************************************

        var removeDuplicates = function(nums) {
            let i = 0;
            for (let j = 1; j < nums.length; j++) {
           if (nums[i] !== nums[j]) {
             i++;
             nums[i] = nums[j];
           }
         }
         return i + 1;
       };
        //   **********************************************************************************
        
               var removeDuplicates = function(nums) {
                if (nums.length === 0) {
                  return 0;
                }
              
                let slow = 0;
              
                for (let fast = 1; fast < nums.length; fast++) {
                  if (nums[fast] !== nums[slow]) {
                    slow++;
                    nums[slow] = nums[fast];
                  }
                }
              
                return slow + 1;
              };