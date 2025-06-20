"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'squadcastfm/2.0.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Retrieve all sessions
     *
     * @summary Get Organization ID
     */
    SDK.prototype.getV2Organizations = function () {
        return this.core.fetch('/v2/organizations', 'get');
    };
    /**
     * Retrieve all sessions
     *
     * @summary Get Balance
     */
    SDK.prototype.getV2OrganizationsBalance = function () {
        return this.core.fetch('/v2/organizations/balance', 'get');
    };
    /**
     * Retrieve all sessions
     *
     * @summary Get all Team Members
     */
    SDK.prototype.getV2OrganizationsTeam = function () {
        return this.core.fetch('/v2/organizations/team', 'get');
    };
    /**
     * Retrieve all sessions
     *
     * @summary Get all Sessions
     */
    SDK.prototype.getV2Sessions = function (metadata) {
        return this.core.fetch('/v2/sessions', 'get', metadata);
    };
    /**
     * Add a session
     *
     * @summary Create new Session
     */
    SDK.prototype.postV2Sessions = function (body, metadata) {
        return this.core.fetch('/v2/sessions', 'post', body, metadata);
    };
    /**
     * Retrieve one session
     *
     * @summary Get a Session
     */
    SDK.prototype.getV2SessionsId = function (metadata) {
        return this.core.fetch('/v2/sessions/{id}', 'get', metadata);
    };
    SDK.prototype.putV2SessionsId = function (body, metadata) {
        return this.core.fetch('/v2/sessions/{id}', 'put', body, metadata);
    };
    /**
     * Delete a session
     *
     * @summary Delete a Session
     */
    SDK.prototype.deleteV2SessionsId = function (metadata) {
        return this.core.fetch('/v2/sessions/{id}', 'delete', metadata);
    };
    /**
     * Retrieve one session
     *
     * @summary Get All Recordings from Session
     */
    SDK.prototype.getV2SessionsIdRecordings = function (metadata) {
        return this.core.fetch('/v2/sessions/{id}/recordings', 'get', metadata);
    };
    /**
     * Retrieve one session
     *
     * @summary Get A Recording from Session
     */
    SDK.prototype.getV2SessionsIdRecordingsRecordingid = function (metadata) {
        return this.core.fetch('/v2/sessions/{id}/recordings/{recordingID}', 'get', metadata);
    };
    /**
     * Retrieve one session
     *
     * @summary Get InviteLinks from Session
     */
    SDK.prototype.getV2SessionsIdInvitelink = function (metadata) {
        return this.core.fetch('/v2/sessions/{id}/invitelink', 'get', metadata);
    };
    /**
     * Retrieve all sessions
     *
     * @summary Get all Shows
     */
    SDK.prototype.getV2Shows = function () {
        return this.core.fetch('/v2/shows', 'get');
    };
    /**
     * Retrieve one session
     *
     * @summary Get a Show
     */
    SDK.prototype.getV2ShowsId = function (metadata) {
        return this.core.fetch('/v2/shows/{id}', 'get', metadata);
    };
    /**
     * Update a session
     *
     * @summary Get Team
     */
    SDK.prototype.getV2ShowsIdTeam = function (metadata) {
        return this.core.fetch('/v2/shows/{id}/team', 'get', metadata);
    };
    /**
     * Retrieve all sessions
     *
     * @summary Get all Webhooks
     */
    SDK.prototype.getV2Webhooks = function () {
        return this.core.fetch('/v2/webhooks', 'get');
    };
    /**
     * Retrieve all sessions
     *
     * @summary Create a Webhook
     */
    SDK.prototype.postV2Webhooks = function (body, metadata) {
        return this.core.fetch('/v2/webhooks', 'post', body, metadata);
    };
    /**
     * Retrieve all sessions
     *
     * @summary Get specific Webhook
     */
    SDK.prototype.getV2WebhooksId = function (metadata) {
        return this.core.fetch('/v2/webhooks/{id}', 'get', metadata);
    };
    /**
     * Retrieve all sessions
     *
     * @summary Delete specific Webhook
     */
    SDK.prototype.deleteV2WebhooksId = function (metadata) {
        return this.core.fetch('/v2/webhooks/{id}', 'delete', metadata);
    };
    /**
     * Retrieve all sessions
     *
     * @summary Update specific Webhook
     */
    SDK.prototype.putV2WebhooksId = function (metadata) {
        return this.core.fetch('/v2/webhooks/{id}', 'put', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
