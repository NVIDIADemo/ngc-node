// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as UsersAPI from './users';
import * as OrgAPI from './org/org';
import * as OrgsAPI from './orgs/orgs';

export class Admin extends APIResource {
  orgs: OrgsAPI.Orgs = new OrgsAPI.Orgs(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);
}

export namespace Admin {
  export import Orgs = OrgsAPI.Orgs;
  export import OrgListResponse = OrgsAPI.OrgListResponse;
  export import OrgCreateParams = OrgsAPI.OrgCreateParams;
  export import OrgListParams = OrgsAPI.OrgListParams;
  export import Users = UsersAPI.Users;
  export import UserOrgOwnerBackfillResponse = UsersAPI.UserOrgOwnerBackfillResponse;
  export import UserInviteParams = UsersAPI.UserInviteParams;
  export import UserMeParams = UsersAPI.UserMeParams;
  export import Org = OrgAPI.Org;
  export import OrgUpdateParams = OrgAPI.OrgUpdateParams;
}
