const UserSession = require("app-infrastructure-data.mod/data/main.mod/model/app-client").AppClient,
    Montage = require("mod/core/core").Montage;

/**
 * @class UserPool
 * @extends Object
 */

Montage.defineProperties(AppClient.prototype, {
    cognitoUserPoolClient: {value: undefined}
});