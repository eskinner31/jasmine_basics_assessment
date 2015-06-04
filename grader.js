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
      console.log(Math.floor(arr.length/2)-1);
      console.log(arr[middleOrPrev]);
      return (sorter[middleOrPrev]);
    }
  }

}
