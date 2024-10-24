# Shared

Types:

- <code><a href="./src/resources/shared.ts">Health</a></code>
- <code><a href="./src/resources/shared.ts">MeteringResultList</a></code>
- <code><a href="./src/resources/shared.ts">Team</a></code>
- <code><a href="./src/resources/shared.ts">TeamList</a></code>
- <code><a href="./src/resources/shared.ts">User</a></code>
- <code><a href="./src/resources/shared.ts">UserInvitationList</a></code>
- <code><a href="./src/resources/shared.ts">UserList</a></code>

# Orgs

Types:

- <code><a href="./src/resources/orgs/orgs.ts">OrgList</a></code>
- <code><a href="./src/resources/orgs/orgs.ts">OrgResponse</a></code>
- <code><a href="./src/resources/orgs/orgs.ts">OrgListResponse</a></code>

Methods:

- <code title="post /v3/orgs">client.orgs.<a href="./src/resources/orgs/orgs.ts">create</a>({ ...params }) -> OrgResponse</code>
- <code title="get /v2/orgs/{org-name}">client.orgs.<a href="./src/resources/orgs/orgs.ts">retrieve</a>(orgName) -> OrgResponse</code>
- <code title="patch /v2/orgs/{org-name}">client.orgs.<a href="./src/resources/orgs/orgs.ts">update</a>(orgName, { ...params }) -> OrgResponse</code>
- <code title="get /v2/orgs">client.orgs.<a href="./src/resources/orgs/orgs.ts">list</a>({ ...params }) -> OrgListResponsesPageNumberOrganizations</code>

## Users

Types:

- <code><a href="./src/resources/orgs/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/orgs/users/users.ts">UserDeleteResponse</a></code>

Methods:

- <code title="post /v2/org/{org-name}/users">client.orgs.users.<a href="./src/resources/orgs/users/users.ts">create</a>(orgName, { ...params }) -> User</code>
- <code title="get /v2/org/{org-name}/users">client.orgs.users.<a href="./src/resources/orgs/users/users.ts">list</a>(orgName, { ...params }) -> UserListResponsesPageNumberUsers</code>
- <code title="delete /v3/orgs/{org-name}/users/{id}">client.orgs.users.<a href="./src/resources/orgs/users/users.ts">delete</a>(orgName, id, { ...params }) -> UserDeleteResponse</code>
- <code title="patch /v3/orgs/{org-name}/users/{user-email-or-id}/add-role">client.orgs.users.<a href="./src/resources/orgs/users/users.ts">addRole</a>(orgName, userEmailOrId, { ...params }) -> User</code>
- <code title="delete /v3/orgs/{org-name}/users/{user-email-or-id}/remove-role">client.orgs.users.<a href="./src/resources/orgs/users/users.ts">removeRole</a>(orgName, userEmailOrId, { ...params }) -> User</code>
- <code title="patch /v2/org/{org-name}/users/{id}/update-role">client.orgs.users.<a href="./src/resources/orgs/users/users.ts">updateRole</a>(orgName, id, { ...params }) -> User</code>

### NcaInvitations

Methods:

- <code title="post /v3/orgs/{org-name}/users/nca-invitations">client.orgs.users.ncaInvitations.<a href="./src/resources/orgs/users/nca-invitations.ts">create</a>(orgName, { ...params }) -> User</code>

## Teams

Types:

- <code><a href="./src/resources/orgs/teams/teams.ts">TeamResponse</a></code>

Methods:

- <code title="get /v2/org/{org-name}/teams">client.orgs.teams.<a href="./src/resources/orgs/teams/teams.ts">list</a>(orgName, { ...params }) -> TeamsPageNumberTeams</code>

### Users

Types:

- <code><a href="./src/resources/orgs/teams/users.ts">UserDeleteResponse</a></code>

Methods:

- <code title="delete /v3/orgs/{org-name}/teams/{team-name}/users/{id}">client.orgs.teams.users.<a href="./src/resources/orgs/teams/users.ts">delete</a>(orgName, teamName, id, { ...params }) -> UserDeleteResponse</code>
- <code title="patch /v3/orgs/{org-name}/teams/{team-name}/users/{user-email-or-id}/add-role">client.orgs.teams.users.<a href="./src/resources/orgs/teams/users.ts">addRole</a>(orgName, teamName, userEmailOrId, { ...params }) -> User</code>
- <code title="delete /v3/orgs/{org-name}/teams/{team-name}/users/{user-email-or-id}/remove-role">client.orgs.teams.users.<a href="./src/resources/orgs/teams/users.ts">removeRole</a>(orgName, teamName, userEmailOrId, { ...params }) -> User</code>

### StarfleetIDs

Methods:

- <code title="get /v2/org/{org-name}/team/{team-name}/starfleetIds/{starfleet-id}">client.orgs.teams.starfleetIds.<a href="./src/resources/orgs/teams/starfleet-ids.ts">retrieve</a>(orgName, teamName, starfleetId) -> User</code>

### NcaInvitations

Methods:

- <code title="post /v3/orgs/{org-name}/teams/{team-name}/users/nca-invitations">client.orgs.teams.ncaInvitations.<a href="./src/resources/orgs/teams/nca-invitations.ts">create</a>(orgName, teamName, { ...params }) -> User</code>

## ProtoOrg

Methods:

- <code title="post /v3/orgs/proto-org">client.orgs.protoOrg.<a href="./src/resources/orgs/proto-org.ts">create</a>({ ...params }) -> OrgResponse</code>

## Credits

Types:

- <code><a href="./src/resources/orgs/credits.ts">CreditsHistory</a></code>

Methods:

- <code title="get /v2/orgs/{org-name}/credits">client.orgs.credits.<a href="./src/resources/orgs/credits.ts">retrieve</a>(orgName) -> CreditsHistory</code>

## StarfleetIDs

Methods:

- <code title="get /v2/org/{org-name}/starfleetIds/{starfleet-id}">client.orgs.starfleetIds.<a href="./src/resources/orgs/starfleet-ids.ts">retrieve</a>(orgName, starfleetId) -> User</code>

## Metering

Methods:

- <code title="get /v2/org/{org-name}/metering">client.orgs.metering.<a href="./src/resources/orgs/metering/metering.ts">retrieveAll</a>(orgName, { ...params }) -> MeteringResultList</code>

### Gpupeak

Methods:

- <code title="get /v2/org/{org-name}/meterings/gpupeak">client.orgs.metering.gpupeak.<a href="./src/resources/orgs/metering/gpupeak.ts">retrieveAll</a>(orgName, { ...params }) -> MeteringResultList</code>

## AuditLogs

Types:

- <code><a href="./src/resources/orgs/audit-logs.ts">AuditLogsPresignedURL</a></code>

Methods:

- <code title="get /v2/org/{org-name}/auditLogs/{log-id}">client.orgs.auditLogs.<a href="./src/resources/orgs/audit-logs.ts">retrieve</a>(orgName, logId) -> AuditLogsPresignedURL</code>

# Me

## APIKey

Types:

- <code><a href="./src/resources/me/api-key.ts">UserKeyResponse</a></code>

Methods:

- <code title="get /v2/users/me">client.me.apiKey.<a href="./src/resources/me/api-key.ts">retrieve</a>({ ...params }) -> User</code>
- <code title="patch /v2/users/me">client.me.apiKey.<a href="./src/resources/me/api-key.ts">update</a>({ ...params }) -> User</code>
- <code title="post /v2/users/me/api-key">client.me.apiKey.<a href="./src/resources/me/api-key.ts">createAPIKey</a>() -> UserKeyResponse</code>

# Admin

## Entitlements

Methods:

- <code title="get /v2/admin/entitlements">client.admin.entitlements.<a href="./src/resources/admin/entitlements.ts">retrieveAll</a>({ ...params }) -> Response</code>

## Orgs

Types:

- <code><a href="./src/resources/admin/orgs/orgs.ts">OrgOrgOwnerBackfillResponse</a></code>
- <code><a href="./src/resources/admin/orgs/orgs.ts">OrgValidateResponse</a></code>

Methods:

- <code title="post /v2/admin/orgs">client.admin.orgs.<a href="./src/resources/admin/orgs/orgs.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /v3/admin/org/{org-name}">client.admin.orgs.<a href="./src/resources/admin/orgs/orgs.ts">retrieve</a>(orgName) -> Response</code>
- <code title="patch /v3/admin/org/{org-name}">client.admin.orgs.<a href="./src/resources/admin/orgs/orgs.ts">update</a>(orgName, { ...params }) -> Response</code>
- <code title="post /v2/admin/backfill-orgs-to-kratos">client.admin.orgs.<a href="./src/resources/admin/orgs/orgs.ts">backfillOrgsToKratos</a>() -> Response</code>
- <code title="post /v2/admin/org/{org-name}/enablement">client.admin.orgs.<a href="./src/resources/admin/orgs/orgs.ts">enable</a>(orgName, { ...params }) -> Response</code>
- <code title="post /v2/admin/org/{org-name}/org-owner-backfill">client.admin.orgs.<a href="./src/resources/admin/orgs/orgs.ts">orgOwnerBackfill</a>(orgName) -> OrgOrgOwnerBackfillResponse</code>
- <code title="get /v3/orgs/proto-org/validate">client.admin.orgs.<a href="./src/resources/admin/orgs/orgs.ts">validate</a>({ ...params }) -> OrgValidateResponse</code>

### Users

Types:

- <code><a href="./src/resources/admin/orgs/users.ts">UserRemoveResponse</a></code>

Methods:

- <code title="post /v2/admin/org/{org-name}/users">client.admin.orgs.users.<a href="./src/resources/admin/orgs/users.ts">create</a>(orgName, { ...params }) -> User</code>
- <code title="get /v3/orgs/{org-name}/users/{user-email-or-id}">client.admin.orgs.users.<a href="./src/resources/admin/orgs/users.ts">retrieve</a>(orgName, userEmailOrId) -> User</code>
- <code title="post /v2/admin/org/{org-name}/users/{id}">client.admin.orgs.users.<a href="./src/resources/admin/orgs/users.ts">add</a>(orgName, id, { ...params }) -> User</code>
- <code title="patch /v2/admin/org/{org-name}/users/{id}/add-role">client.admin.orgs.users.<a href="./src/resources/admin/orgs/users.ts">addRole</a>(orgName, id, { ...params }) -> User</code>
- <code title="get /v2/admin/org/{org-name}/entitlements">client.admin.orgs.users.<a href="./src/resources/admin/orgs/users.ts">getEntitlements</a>(orgName, { ...params }) -> Response</code>
- <code title="delete /v2/admin/org/{org-name}/users/{id}">client.admin.orgs.users.<a href="./src/resources/admin/orgs/users.ts">remove</a>(orgName, id) -> UserRemoveResponse</code>

### Teams

#### Users

Methods:

- <code title="post /v2/admin/org/{org-name}/team/{team-name}/users">client.admin.orgs.teams.users.<a href="./src/resources/admin/orgs/teams/users.ts">create</a>(orgName, teamName, { ...params }) -> User</code>
- <code title="get /v2/admin/org/{org-name}/teams/{team-name}">client.admin.orgs.teams.users.<a href="./src/resources/admin/orgs/teams/users.ts">retrieve</a>(orgName, teamName) -> Response</code>
- <code title="patch /v2/admin/org/{org-name}/teams/{team-name}">client.admin.orgs.teams.users.<a href="./src/resources/admin/orgs/teams/users.ts">update</a>(orgName, teamName, { ...params }) -> Response</code>
- <code title="post /v2/admin/org/{org-name}/team/{team-name}/users/{id}">client.admin.orgs.teams.users.<a href="./src/resources/admin/orgs/teams/users.ts">add</a>(orgName, teamName, id, { ...params }) -> User</code>
- <code title="patch /v2/admin/org/{org-name}/team/{team-name}/users/{id}/add-role">client.admin.orgs.teams.users.<a href="./src/resources/admin/orgs/teams/users.ts">addRole</a>(orgName, teamName, id, { ...params }) -> User</code>
- <code title="get /v3/orgs/{org-name}/teams/{team-name}/users/{user-email-or-id}">client.admin.orgs.teams.users.<a href="./src/resources/admin/orgs/teams/users.ts">retrieveUser</a>(orgName, teamName, userEmailOrId) -> User</code>

## Users

Types:

- <code><a href="./src/resources/admin/users.ts">UserCRMSyncResponse</a></code>

Methods:

- <code title="post /v2/admin/users/{id}/crm-sync">client.admin.users.<a href="./src/resources/admin/users.ts">crmSync</a>(id) -> UserCRMSyncResponse</code>
- <code title="post /v2/admin/users/{id}/migrate-deprecated-roles">client.admin.users.<a href="./src/resources/admin/users.ts">migrateDeprecatedRoles</a>(id) -> User</code>

# Services

Types:

- <code><a href="./src/resources/services.ts">ServiceVersionResponse</a></code>

Methods:

- <code title="get /version">client.services.<a href="./src/resources/services.ts">version</a>({ ...params }) -> ServiceVersionResponse</code>

# Roles

Types:

- <code><a href="./src/resources/roles.ts">UserRoleDefinitions</a></code>

Methods:

- <code title="get /roles">client.roles.<a href="./src/resources/roles.ts">retrieveAll</a>({ ...params }) -> UserRoleDefinitions</code>

# PublicKeys

Types:

- <code><a href="./src/resources/public-keys.ts">PublicKeyRetrieveAllResponse</a></code>

Methods:

- <code title="get /public-keys">client.publicKeys.<a href="./src/resources/public-keys.ts">retrieveAll</a>() -> PublicKeyRetrieveAllResponse</code>

# Health

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health/health.ts">retrieveAll</a>() -> Health</code>

## All

Methods:

- <code title="get /health/all">client.health.all.<a href="./src/resources/health/all.ts">retrieveAll</a>({ ...params }) -> Health</code>

# SwaggerResources

Methods:

- <code title="post /swagger-resources">client.swaggerResources.<a href="./src/resources/swagger-resources/swagger-resources.ts">create</a>() -> Response</code>
- <code title="patch /swagger-resources">client.swaggerResources.<a href="./src/resources/swagger-resources/swagger-resources.ts">update</a>() -> Response</code>
- <code title="delete /swagger-resources">client.swaggerResources.<a href="./src/resources/swagger-resources/swagger-resources.ts">delete</a>() -> Response</code>
- <code title="get /swagger-resources">client.swaggerResources.<a href="./src/resources/swagger-resources/swagger-resources.ts">retrieveAll</a>() -> Response</code>

## Configuration

### Ui

Methods:

- <code title="post /swagger-resources/configuration/ui">client.swaggerResources.configuration.ui.<a href="./src/resources/swagger-resources/configuration/ui.ts">create</a>() -> Response</code>
- <code title="get /swagger-resources/configuration/ui">client.swaggerResources.configuration.ui.<a href="./src/resources/swagger-resources/configuration/ui.ts">retrieve</a>() -> Response</code>
- <code title="patch /swagger-resources/configuration/ui">client.swaggerResources.configuration.ui.<a href="./src/resources/swagger-resources/configuration/ui.ts">update</a>() -> Response</code>
- <code title="delete /swagger-resources/configuration/ui">client.swaggerResources.configuration.ui.<a href="./src/resources/swagger-resources/configuration/ui.ts">delete</a>() -> Response</code>

### Security

Methods:

- <code title="post /swagger-resources/configuration/security">client.swaggerResources.configuration.security.<a href="./src/resources/swagger-resources/configuration/security.ts">create</a>() -> Response</code>
- <code title="get /swagger-resources/configuration/security">client.swaggerResources.configuration.security.<a href="./src/resources/swagger-resources/configuration/security.ts">retrieve</a>() -> Response</code>
- <code title="patch /swagger-resources/configuration/security">client.swaggerResources.configuration.security.<a href="./src/resources/swagger-resources/configuration/security.ts">update</a>() -> Response</code>
- <code title="delete /swagger-resources/configuration/security">client.swaggerResources.configuration.security.<a href="./src/resources/swagger-resources/configuration/security.ts">delete</a>() -> Response</code>
