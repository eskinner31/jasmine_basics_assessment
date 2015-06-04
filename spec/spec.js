var gradeBook = require('./../grader.js');

  describe('LetterGrader Function', function(){
    it('Letter Grade should reduce every 10 points', function(){
      expect(gradeBook.letterGrader(90)).toEqual('A');
      expect(gradeBook.letterGrader(80)).toEqual('B');
      expect(gradeBook.letterGrader(70)).toEqual('C');
      expect(gradeBook.letterGrader(60)).toEqual('D');
      expect(gradeBook.letterGrader(50)).toEqual('F');
    })
  })

  describe('averageGrader Function', function(){
    it('Returns the average score from an array of scores', function(){
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

  describe('modeScore Function', function(){
    it('Returns the score that occurs most often from an array', function(){
      expect(gradeBook.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
      expect(gradeBook.modeScore([100,100,100,100,80,80,80,80,80])).toEqual(80);
      //Stretch Goal - Multi Modal.
      //expect(gradeBook.modeScore([50,50,50,50,50,60,60,60,60,60])).toEqual(60);
    })
  })
