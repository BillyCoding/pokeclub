import {Types, TypesUser} from './types';
import {action} from 'typesafe-actions';

export const PostUser = ({username = '', password = ''}) => {
  return action(Types.POST_USER, {username, password});
};

export const PostUserSuccess = (user: TypesUser) => {
  return action(Types.POST_USER_SUCCESS, {user});
};

export const PostUserFailure = (error: number) => {
  return action(Types.POST_USER_FAILURE, {error});
};

export const UserLogout = () => {
  return action(Types.USER_LOGOUT, {});
};
