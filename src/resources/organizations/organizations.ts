// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AuditLogsAPI from './audit-logs';
import * as TeamsAPI from './teams/teams';

export class Organizations extends APIResource {
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
}

export namespace Organizations {
  export import Teams = TeamsAPI.Teams;
  export import TeamCreateResponse = TeamsAPI.TeamCreateResponse;
  export import TeamCreateParams = TeamsAPI.TeamCreateParams;
  export import AuditLogs = AuditLogsAPI.AuditLogs;
  export import AuditLogsResponse = AuditLogsAPI.AuditLogsResponse;
  export import AuditLogDeleteResponse = AuditLogsAPI.AuditLogDeleteResponse;
  export import AuditLogRequestResponse = AuditLogsAPI.AuditLogRequestResponse;
  export import AuditLogDeleteParams = AuditLogsAPI.AuditLogDeleteParams;
  export import AuditLogRequestParams = AuditLogsAPI.AuditLogRequestParams;
}
