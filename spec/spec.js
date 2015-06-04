var gradeBook = require('./../grader.js');

  describe('LetterGrader Function', function(){
    xit('Letter Grade should reduce every 10 points', function(){
      expect(gradeBook.letterGrader(90)).toEqual('A');
      expect(gradeBook.letterGrader(80)).toEqual('B');
      expect(gradeBook.letterGrader(70)).toEqual('C');
      expect(gradeBook.letterGrader(60)).toEqual('D');
      expect(gradeBook.letterGrader(50)).toEqual('F');
    })
  })

  describe('averageGrader Function', function(){
    xit('Returns the average score from an array of scores', function(){
      expect(gradeBook.averageScore([90, 95, 87, 60])).toEqual(83);
    })
  })

  describe('medianScore Function', function(){
    it('Returns the middle score from an array', function(){
      expect(gradeBook.medianScore([52,80,80,86,94])).toEqual(80);
      expect(gradeBook.medianScore([52,80,86,94])).toEqual(83);
      expect(gradeBook.medianScore([80,52,86,94,80])).toEqual(80);
    })
  })
