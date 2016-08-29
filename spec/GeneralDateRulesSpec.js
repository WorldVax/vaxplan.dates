var expect = require("expect");
var CdsiDate = require("..");

describe("CALCDT-1", function() {
    it("The computed date of adding any number of years to an existing date must be calculated by incrementing the date-year while holding the date-month and date-day constant.", function(){
        var dt = new CdsiDate("01/01/2000");
        dt.adjust("3 years");
        expect(dt).toEqual(new Date("01/01/2003"));
    });
});

describe("CALCDT-2", function() {
    it("The computed date of adding any number of months to an existing date must be calculated by incrementing the date-month (and dateyear, if necessary) while holding the date-day constant. ",function(){
        var dt = new CdsiDate("01/01/2000");
        dt.adjust("3 months");
        expect(dt).toEqual(new Date("04/01/2000"));
        dt = new CdsiDate("11/01/2000");
        dt.adjust("3 months");
        expect(dt).toEqual(new Date("02/01/2001"));
    });
});

describe("CALCDT-3", function(){
    it("The computed date of adding any number of weeks or days to an existing date must be calculated by adding the total days to the existing date.",function(){
        var dt = new CdsiDate("01/01/2000");
        dt.adjust("3 days");
        expect(dt).toEqual(new Date("01/04/2000"));
        dt = new CdsiDate("01/01/2000");
        dt.adjust("3 weeks");
        expect(dt).toEqual(new Date("01/22/2000"));
        dt = new CdsiDate("02/01/2000");
        dt.adjust("5 weeks");
        expect(dt).toEqual(new Date("03/07/2000"));
        dt = new CdsiDate("02/01/2001");
        dt.adjust("5 weeks");
        expect(dt).toEqual(new Date("03/08/2001"));
    });
});

describe("CALCDT-4", function(){
    it("The computed date of subtracting any number of days from an existing date must be calculated by subtracting the total days from the existing date.",function(){});
    var dt = new CdsiDate("01/15/2000");
    dt.adjust("-4 days");
    expect(dt).toEqual(new Date("01/11/2000"));
});

describe("CALDT-5",function(){
    it("",function(){
        var dt = new CdsiDate("01/31/2001");
        dt.adjust("1 month");
        expect(dt).toEqual(new Date("03/01/2001"));
        dt = new CdsiDate("07/31/2000");
        dt.adjust("2 months");
        expect(dt).toEqual(new Date("10/01/2000"));
    });
});

describe("CALCDT-6", function(){
    var dt = new CdsiDate("01/31/2000");
    dt.adjust("1 month - 4 days");
    expect(dt).toEqual(new Date("02/25/2000"));
});
