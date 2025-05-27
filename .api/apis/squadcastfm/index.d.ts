import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Retrieve all sessions
     *
     * @summary Get Organization ID
     */
    getV2Organizations(): Promise<FetchResponse<200, types.GetV2OrganizationsResponse200>>;
    /**
     * Retrieve all sessions
     *
     * @summary Get Balance
     */
    getV2OrganizationsBalance(): Promise<FetchResponse<200, types.GetV2OrganizationsBalanceResponse200>>;
    /**
     * Retrieve all sessions
     *
     * @summary Get all Team Members
     */
    getV2OrganizationsTeam(): Promise<FetchResponse<200, types.GetV2OrganizationsTeamResponse200>>;
    /**
     * Retrieve all sessions
     *
     * @summary Get all Sessions
     */
    getV2Sessions(metadata?: types.GetV2SessionsMetadataParam): Promise<FetchResponse<200, types.GetV2SessionsResponse200>>;
    /**
     * Add a session
     *
     * @summary Create new Session
     */
    postV2Sessions(body: types.PostV2SessionsFormDataParam, metadata?: types.PostV2SessionsMetadataParam): Promise<FetchResponse<200, types.PostV2SessionsResponse200>>;
    /**
     * Retrieve one session
     *
     * @summary Get a Session
     */
    getV2SessionsId(metadata: types.GetV2SessionsIdMetadataParam): Promise<FetchResponse<200, types.GetV2SessionsIdResponse200>>;
    /**
     * Update a session
     *
     * @summary Update a Session
     */
    putV2SessionsId(body: types.PutV2SessionsIdFormDataParam, metadata: types.PutV2SessionsIdMetadataParam): Promise<FetchResponse<200, types.PutV2SessionsIdResponse200>>;
    putV2SessionsId(metadata: types.PutV2SessionsIdMetadataParam): Promise<FetchResponse<200, types.PutV2SessionsIdResponse200>>;
    /**
     * Delete a session
     *
     * @summary Delete a Session
     */
    deleteV2SessionsId(metadata: types.DeleteV2SessionsIdMetadataParam): Promise<FetchResponse<200, types.DeleteV2SessionsIdResponse200>>;
    /**
     * Retrieve one session
     *
     * @summary Get All Recordings from Session
     */
    getV2SessionsIdRecordings(metadata: types.GetV2SessionsIdRecordingsMetadataParam): Promise<FetchResponse<200, types.GetV2SessionsIdRecordingsResponse200>>;
    /**
     * Retrieve one session
     *
     * @summary Get A Recording from Session
     */
    getV2SessionsIdRecordingsRecordingid(metadata: types.GetV2SessionsIdRecordingsRecordingidMetadataParam): Promise<FetchResponse<200, types.GetV2SessionsIdRecordingsRecordingidResponse200>>;
    /**
     * Retrieve one session
     *
     * @summary Get InviteLinks from Session
     */
    getV2SessionsIdInvitelink(metadata: types.GetV2SessionsIdInvitelinkMetadataParam): Promise<FetchResponse<200, types.GetV2SessionsIdInvitelinkResponse200>>;
    /**
     * Retrieve all sessions
     *
     * @summary Get all Shows
     */
    getV2Shows(): Promise<FetchResponse<200, types.GetV2ShowsResponse200>>;
    /**
     * Retrieve one session
     *
     * @summary Get a Show
     */
    getV2ShowsId(metadata: types.GetV2ShowsIdMetadataParam): Promise<FetchResponse<200, types.GetV2ShowsIdResponse200>>;
    /**
     * Update a session
     *
     * @summary Get Team
     */
    getV2ShowsIdTeam(metadata: types.GetV2ShowsIdTeamMetadataParam): Promise<FetchResponse<200, types.GetV2ShowsIdTeamResponse200>>;
    /**
     * Retrieve all sessions
     *
     * @summary Get all Webhooks
     */
    getV2Webhooks(): Promise<FetchResponse<200, types.GetV2WebhooksResponse200>>;
    /**
     * Retrieve all sessions
     *
     * @summary Create a Webhook
     */
    postV2Webhooks(body?: types.PostV2WebhooksFormDataParam, metadata?: types.PostV2WebhooksMetadataParam): Promise<FetchResponse<200, types.PostV2WebhooksResponse200>>;
    /**
     * Retrieve all sessions
     *
     * @summary Get specific Webhook
     */
    getV2WebhooksId(metadata: types.GetV2WebhooksIdMetadataParam): Promise<FetchResponse<200, types.GetV2WebhooksIdResponse200>>;
    /**
     * Retrieve all sessions
     *
     * @summary Delete specific Webhook
     */
    deleteV2WebhooksId(metadata: types.DeleteV2WebhooksIdMetadataParam): Promise<FetchResponse<200, types.DeleteV2WebhooksIdResponse200>>;
    /**
     * Retrieve all sessions
     *
     * @summary Update specific Webhook
     */
    putV2WebhooksId(metadata: types.PutV2WebhooksIdMetadataParam): Promise<FetchResponse<200, types.PutV2WebhooksIdResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
