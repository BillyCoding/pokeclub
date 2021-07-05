export const Types = {
  POST_USER: '@theme/POST_USER',
  POST_USER_SUCCESS: '@theme/POST_USER_SUCCESS',
  POST_USER_FAILURE: '@theme/POST_USER_FAILURE',
  USER_LOGOUT: '@theme/USER_LOGOUT',
};

export interface TypesUser {
  data: {
    user: {
      id: string;
      name: string;
      username: string;
      enabled: boolean;
      created_at: string;
      updated_at: string;
    };
    token: string;
  };
  loading: boolean;
  error: boolean;
}
