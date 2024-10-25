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
  export import EntitlementRetrieveAllParams = EntitlementsAPI.EntitlementRetrieveAllParams;
  export import Orgs = OrgsAPI.Orgs;
  export import OrgOrgOwnerBackfillResponse = OrgsAPI.OrgOrgOwnerBackfillResponse;
  export import OrgValidateResponse = OrgsAPI.OrgValidateResponse;
  export import OrgCreateParams = OrgsAPI.OrgCreateParams;
  export import OrgUpdateParams = OrgsAPI.OrgUpdateParams;
  export import OrgEnableParams = OrgsAPI.OrgEnableParams;
  export import OrgValidateParams = OrgsAPI.OrgValidateParams;
  export import Users = UsersAPI.Users;
  export import UserCRMSyncResponse = UsersAPI.UserCRMSyncResponse;
}
