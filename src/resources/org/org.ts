// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TeamAPI from './team/team';
import * as TeamsAPI from './teams/teams';
import * as UsersAPI from './users/users';

export class Org extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
  team: TeamAPI.Team = new TeamAPI.Team(this._client);
}

export namespace Org {
  export import Users = UsersAPI.Users;
  export import UserRemoveResponse = UsersAPI.UserRemoveResponse;
  export import UserRetrieveParams = UsersAPI.UserRetrieveParams;
  export import UserAddRoleParams = UsersAPI.UserAddRoleParams;
  export import UserInviteParams = UsersAPI.UserInviteParams;
  export import UserRemoveParams = UsersAPI.UserRemoveParams;
  export import UserRemoveRoleParams = UsersAPI.UserRemoveRoleParams;
  export import Teams = TeamsAPI.Teams;
  export import TeamDeleteResponse = TeamsAPI.TeamDeleteResponse;
  export import TeamUpdateParams = TeamsAPI.TeamUpdateParams;
  export import Team = TeamAPI.Team;
}
