/**
    @module aws.mod/data/main.mod/model/s3/expiring-object-download
*/

var DataObject = require("mod/data/model/data-object").DataObject;

/**
 * @class ExpiringObjectDownload
 * @extends DataObject
 *
 */



exports.ExpiringObjectDownload = DataObject.specialize(/** @lends ExpiringObjectDownload.prototype */ {
    key: {
        value: undefined
    },
    bucketName: {
        value: undefined
    },
    bucket: {
        value: undefined
    },
    object: {
        value: undefined
    },
    expirationDelay: {
        value: undefined
    },
    signedUrl: {
        value: undefined
    }
});
