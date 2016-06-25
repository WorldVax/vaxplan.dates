/**
@overview Date utility functions.
@author Dennis Dunn <ansofive@gmail.com>
@license MIT
*/

namespace('cdsi.date');

cdsi.date = {
    compare: function (date1, date2) {
        var d1 = Date.parse(date1);
        var d2 = Date.parse(date2);
        return Date.compare(d1, d2);
    }
};

// I've heard that extending standard objects is bad form. 
// If that's true then what's the point? 
Date.prototype.clone = function () {
    return new Date(this.getTime());
};

//
// Date time functions
Date.prototype.setToStartOfDay = function () {
    this.setHours(0, 0, 0, 0);
};

Date.prototype.setToEndOfDay = function () {
    this.setHours(23, 59, 59, 999);
};

//
// Date interval arithmetic
//
Date.prototype.addDays = function (n) {
    var d = this.clone();
    d.setDate(d.getDate() + n);
    return d;
};

Date.prototype.addWeeks = function (n) {
    return this.addDays(7 * n);
};

Date.prototype.addMonths = function (n) {
    var d = this.clone();
    d.setMonth(d.getMonth() + n);
    return d;
};

Date.prototype.addYears = function (n) {
    var d = this.clone();
    d.setFullYear(d.getFullYear() + n);
    return d;
};

Date.prototype.addInterval = function (interval) {
    var d = this.clone();
    var terms = interval.match(/([-+]?\s*\d+)\s*(\w+)/ig);
    for (var i in terms) {
        var match = terms[i].replace(/\s/g, '').match(/([-+]?\s*\d+)\s*(\w+)/i);
        switch (match[2]) {
            case 'd':
            case 'day':
            case 'days':
                d = d.addDays(Number(match[1]));
                break;
            case 'w':
            case 'week':
            case 'weeks':
                d = d.addWeeks(Number(match[1]));
                break;
            case 'm':
            case 'month':
            case 'months':
                d = d.addMonths(Number(match[1]));
                break;
            case 'y':
            case 'year':
            case 'years':
                d = d.addYears(Number(match[1]));
                break;
        }
    }
    return d;
};
