/**
    @module aws.mod/data/main.mod/model/user-pool-client
*/

var Target = require("mod/core/target").Target;

/**
 * @class UserPoolClient
 * @extends DataObject
 *
 */

exports.UserPoolClient = Target.specialize(/** @lends Application.prototype */ {

    ClientId: {
        value: undefined
    },
    UserPoolId: {
        value: undefined
    },
    UserPool: {
        value: undefined
    },
    ClientName: {
        value: undefined
    },
    ClientSecret: {
        value: undefined
    },
    RefreshTokenValidity: {
        value: undefined
    },
    AccessTokenValidity: {
        value: undefined
    },
    IdTokenValidity: {
        value: undefined
    },
    TokenValidityUnits: {
        value: undefined
    }
});
