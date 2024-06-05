const AppClient = require("mod/data/model/app/app-client").AppClient,
    Montage = require("mod/core/core").Montage;

/**
 * @class UserPool
 * @extends Object
 */

Montage.defineProperties(AppClient.prototype, {
    cognitoUserPoolClient: {value: undefined}
});