import _ = require("lodash");

// tslint:disable-next-line:forin
// This is probably a good idea, just not in this situation
for (let x in _.range(0, 10)) {
    console.log(_.random(0, 1, true));
}
