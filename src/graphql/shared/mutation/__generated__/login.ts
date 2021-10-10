/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginResponseTypeEnum } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login {
  __typename: "LoginResponse";
  type: LoginResponseTypeEnum | null;
  error: string | null;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  password: string;
  email: string;
}
