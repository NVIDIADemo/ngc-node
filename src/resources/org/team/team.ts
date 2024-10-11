// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as UsersAPI from './users/users';

export class Team extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export namespace Team {
  export import Users = UsersAPI.Users;
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
}
