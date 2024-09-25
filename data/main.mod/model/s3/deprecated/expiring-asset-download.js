/**
    @module aws.mod/data/main.mod/model/s3/expiring-asset-download
*/

var DataObject = require("mod/data/model/data-object").DataObject;

/**
 * @class ExpiringAssetDownload
 * @extends DataObject
 *
 */



exports.ExpiringAssetDownload = DataObject.specialize(/** @lends ExpiringAssetDownload.prototype */ {
    asset: {
        value: undefined
    },
    expirationDelay: {
        value: undefined
    },
    signedUrl: {
        value: undefined
    }
});
