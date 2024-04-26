/**
    @module aws.mod/data/main.mod/model/user-pool
*/

var Target = require("montage/core/target").Target;

/**
 * @class UserPool
 * @extends Target
 *
 */

exports.UserPool = Target.specialize(/** @lends Application.prototype */ {

    name: {
        value: undefined
    },
    secret: {
        value: undefined
    },
    refreshTokenValidityValue: {
        value: undefined
    },
    accessTokenValidityValue: {
        value: undefined
    },
    idTokenValidityValue: {
        value: undefined
    },
    tokenValidityUnits: {
        value: undefined
    }
});
