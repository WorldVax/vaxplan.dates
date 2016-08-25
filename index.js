module.exports = (function () {
    var CdsiDate = function () {
        var dt = new Date();
        dt.setHours(0, 0, 0, 0);
        Object.setPrototypeOf(dt, CdsiDate.prototype);
        return dt;
    }

    Object.setPrototypeOf(CdsiDate.prototype, Date.prototype);

    CdsiDate.prototype.adjust = function (adjustments) {
        var terms = adjustments.match(/([-+]?\s*\d+)\s*(\w+)/ig);
        for (var i in terms) {
            var match = terms[i].replace(/\s/g, '').match(/([-+]?\s*\d+)\s*(\w+)/i);
            var delta = Number(match[1]);
            switch (match[2]) {
                case 'd':
                case 'day':
                case 'days':
                    this.setDate(this.getDate() + delta);
                    break;
                case 'w':
                case 'week':
                case 'weeks':
                    this.setDate(this.getDate() + 7 * delta);
                    break;
                case 'm':
                case 'month':
                case 'months':
                    this.setMonth(this.getMonth() + delta);
                    break;
                case 'y':
                case 'year':
                case 'years':
                    this.setFullYear(this.getFullYear() + delta);
                    break;
            }
        }   
    }
    return CdsiDate;
})();