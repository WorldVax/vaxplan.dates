var _ = require('lodash');

module.exports = (function () {
    var CdsiDate = function (datestring) {
        var dt = datestring ? new Date(datestring) : new Date();
        _.extend(dt, cdsiproto);
        return dt;
    }

    var cdsiproto = {
        adjust: function (adjustments) {
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
    }

    return CdsiDate;
})();