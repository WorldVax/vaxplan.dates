var expect = require("expect");
var CdsiDate = require("..");

describe("new CdsiDate", function(){
    var dt = new CdsiDate();
    it("should be of type Date", function(){
        expect(dt).toBeA(Date);
    });
    it("should be of type CdsiDate", function(){
        expect(dt).toBeA(CdsiDate);
    });
});

