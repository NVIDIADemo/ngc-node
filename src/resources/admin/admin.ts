// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EntitlementsAPI from './entitlements';
import * as UsersAPI from './users';
import * as OrgsAPI from './orgs/orgs';

export class Admin extends APIResource {
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  orgs: OrgsAPI.Orgs = new OrgsAPI.Orgs(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export namespace Admin {
  export import Entitlements = EntitlementsAPI.Entitlements;
  export type EntitlementRetrieveAllParams = EntitlementsAPI.EntitlementRetrieveAllParams;
  export import Orgs = OrgsAPI.Orgs;
  export type OrgOrgOwnerBackfillResponse = OrgsAPI.OrgOrgOwnerBackfillResponse;
  export type OrgValidateResponse = OrgsAPI.OrgValidateResponse;
  export type OrgCreateParams = OrgsAPI.OrgCreateParams;
  export type OrgUpdateParams = OrgsAPI.OrgUpdateParams;
  export type OrgEnableParams = OrgsAPI.OrgEnableParams;
  export type OrgValidateParams = OrgsAPI.OrgValidateParams;
  export import Users = UsersAPI.Users;
  export type UserCRMSyncResponse = UsersAPI.UserCRMSyncResponse;
}
