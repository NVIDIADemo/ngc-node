// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as UsersAPI from './users';

export class Teams extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export namespace Teams {
  export import Users = UsersAPI.Users;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserUpdateParams = UsersAPI.UserUpdateParams;
  export import UserAddParams = UsersAPI.UserAddParams;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
}
