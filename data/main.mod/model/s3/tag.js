/**
    @module aws.mod/data/main.mod/model/tag
*/

var DataObject = require("montage/data/model/data-object").DataObject;

/**
 * @class Tag
 * @extends DataObject
 *
 */

exports.Tag = DataObject.specialize(/** @lends Secret.prototype */ {

    key: {
        value: undefined
    },
    value: {
        value: undefined
    }
});
