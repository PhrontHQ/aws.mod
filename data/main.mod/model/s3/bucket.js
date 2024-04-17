/**
    @module phront/data/main.mod/model/aws/s3/bucket
*/

var DataObject = require("montage/data/model/data-object").DataObject;

/**
 * @class Bucket
 * @extends DataObject
 *
 */

exports.Bucket = DataObject.specialize(/** @lends Bucket.prototype */ {

    identifier: {
        value: undefined
    }
});
