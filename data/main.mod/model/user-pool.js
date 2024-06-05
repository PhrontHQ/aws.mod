const UserPool = require("mod/data/model/app/user-pool").UserPool,
    Montage = require("mod/core/core").Montage;

/**
 * @class UserPool
 * @extends Object
 */

Montage.defineProperties(UserPool.prototype, {
    cognitoUserPool: {value: undefined}
});