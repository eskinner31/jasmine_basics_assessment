module.exports = {

  letterGrader: function(a){
    if(a >= 90){
      return 'A';
    }else if(a<= 89 && a>= 80){
      return 'B';
    }else if (a<= 79 && a>= 70){
      return 'C';
    }else if (a<= 69 && a>= 60){
      return 'D';
    }else{
      return 'F';
    }
  },

  averageScore: function(arr){
    var sum = 0;
    arr.forEach(function(el){
      sum = sum + el;
    })
    return (sum/arr.length);
  },

  medianScore: function(arr){
    var sorter = arr.sort();
    var middleOrPrev = Math.floor(arr.length/2)-1;
    var next = Math.floor(arr.length/2);
    var median = (sorter[middleOrPrev]+sorter[next])/2;
    if(arr.length%2 === 0){
      return median;
    }else{
      return (sorter[middleOrPrev]);
    }
  },

  modeScore: function mode(arr){
    var modeObj = {};   //Create an Object
    var max = arr[0]; //Create a variable for the value of the number that occurs the most often set it to array[0]
    var maxCount = 1;   //created a counter, set to one to account the first instance of the number at array[0]
    arr.forEach(function(el){  //forEach to traverse the values of the array
        if(modeObj[el] == null){ //if the object is empty or does not have the current element as a key, create a key and set the value to 1 for the first count
            modeObj[el] = 1;
        }
        else{                    //Otherwise add one to the value of the key modeObj[el]
            modeObj[el]++;
        }
        if(modeObj[el] > maxCount){  // if the value at modeObj[el] is greater than the maxCount set the max = el and maxCount = to the modeObj[el]
            max = el;
            maxCount = modeObj[el];
        }
    })
     return max;                    //At the end of it all return the max
   }

}
