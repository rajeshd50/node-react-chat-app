const fs = require("fs");
const path = require("path");
const async = require("async");

const FILE_DATA = {
    ROBOTS: `User-agent: *\nDisallow: /api\n`
}

async.parallel([
    (cb) => {
        fs.writeFileSync(path.resolve(__dirname, '..', path.sep, 'build', path.sep, 'robots.txt'), FILE_DATA.ROBOTS)
        console.log('robots.txt is written')
        return cb(null);
    }
], (err, data) => {
    console.log('done')
})