declare const DeleteV2SessionsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["sint cillum voluptate elit"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "(Required) ";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteV2WebhooksId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Organizations: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrganizationsBalance: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrganizationsTeam: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Sessions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly showID: {
                    readonly type: "string";
                    readonly examples: readonly ["<ShowID>"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2SessionsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2SessionsIdInvitelink: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2SessionsIdRecordings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2SessionsIdRecordingsRecordingid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly recordingID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id", "recordingID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Shows: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ShowsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2ShowsIdTeam: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly examples: readonly ["application/x-www-form-urlencoded"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2Webhooks: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2WebhooksId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2Sessions: {
    readonly formData: {
        readonly required: readonly ["sessionTitle", "date", "startTime", "endTime"];
        readonly properties: {
            readonly sessionTitle: {
                readonly type: "string";
                readonly description: "Title your Session";
                readonly examples: readonly ["Your Session Title"];
            };
            readonly date: {
                readonly type: "string";
                readonly description: "A Date to Schedule your Session in YYYY-MM-DD format";
                readonly examples: readonly ["2023-03-19"];
            };
            readonly timeZone: {
                readonly type: "string";
                readonly description: "A specific timezone for your Session";
                readonly examples: readonly ["America/Los_Angeles"];
            };
            readonly startTime: {
                readonly type: "string";
                readonly description: "A Start Time for your Session in hh:mm A format";
                readonly examples: readonly ["05:00 PM"];
            };
            readonly endTime: {
                readonly type: "string";
                readonly description: "A End Time for your Session in hh:mm A format";
                readonly examples: readonly ["07:00 PM"];
            };
            readonly stage: {
                readonly type: "string";
                readonly description: "Invite Email for on stage for your Session";
                readonly examples: readonly ["john@email.com"];
            };
            readonly viewer: {
                readonly type: "string";
                readonly description: "Invite Email for backstage for your Session";
                readonly examples: readonly ["jane@email.com"];
            };
            readonly videoEnabled: {
                readonly type: "boolean";
                readonly description: "Enable Video Recording for your Session (Checks your organization's Plan)";
                readonly examples: readonly ["true"];
            };
            readonly favorite: {
                readonly type: "boolean";
                readonly description: "Add this Session to your favorites";
                readonly examples: readonly ["true"];
            };
            readonly showID: {
                readonly type: "string";
                readonly description: "Schedule this Session for a Specific Show";
                readonly examples: readonly ["Show ID"];
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly examples: readonly ["application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2Webhooks: {
    readonly formData: {
        readonly properties: {
            readonly url: {
                readonly type: "string";
                readonly examples: readonly ["https://tall-birds-double-104-58-65-118.loca.lt"];
            };
            readonly events: {
                readonly type: "string";
                readonly examples: readonly ["recording_session.updated"];
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly examples: readonly ["application/x-www-form-urlencoded"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2SessionsId: {
    readonly formData: {
        readonly properties: {
            readonly sessionTitle: {
                readonly type: "string";
                readonly description: "Title your Session";
                readonly examples: readonly ["Your Session Title"];
            };
            readonly date: {
                readonly type: "string";
                readonly description: "A Date to Schedule your Session in YYYY-MM-DD format";
                readonly examples: readonly ["2023-03-19"];
            };
            readonly timeZone: {
                readonly type: "string";
                readonly description: "A specific timezone for your Session";
                readonly examples: readonly ["America/Los_Angeles"];
            };
            readonly startTime: {
                readonly type: "string";
                readonly description: "A Start Time for your Session in hh:mm A format";
                readonly examples: readonly ["05:00 PM"];
            };
            readonly endTime: {
                readonly type: "string";
                readonly description: "A End Time for your Session in hh:mm A format";
                readonly examples: readonly ["07:00 PM"];
            };
            readonly stage: {
                readonly type: "string";
                readonly description: "Invite Email for on stage for your Session";
                readonly examples: readonly ["john@email.com"];
            };
            readonly viewer: {
                readonly type: "string";
                readonly description: "Invite Email for backstage for your Session";
                readonly examples: readonly ["jane@email.com"];
            };
            readonly favorite: {
                readonly type: "boolean";
                readonly description: "Add this Session to your favorites";
                readonly examples: readonly ["true"];
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly examples: readonly ["application/json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutV2WebhooksId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "Content-Type": {
                    readonly type: "string";
                    readonly examples: readonly ["application/x-www-form-urlencoded"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteV2SessionsId, DeleteV2WebhooksId, GetV2Organizations, GetV2OrganizationsBalance, GetV2OrganizationsTeam, GetV2Sessions, GetV2SessionsId, GetV2SessionsIdInvitelink, GetV2SessionsIdRecordings, GetV2SessionsIdRecordingsRecordingid, GetV2Shows, GetV2ShowsId, GetV2ShowsIdTeam, GetV2Webhooks, GetV2WebhooksId, PostV2Sessions, PostV2Webhooks, PutV2SessionsId, PutV2WebhooksId };
