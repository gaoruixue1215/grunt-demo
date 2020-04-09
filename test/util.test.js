var expact = chai.export;

describe('矩形面积函数的测试',function(){
  it('area(10,5)=50',function(){
    var r = rectangle();
    expact(r.area(10,6)).to.be.equal(60);
  });
})
