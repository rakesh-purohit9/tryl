import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/auth/`;

const API_URLS = { POST_LOGIN: `${COMMON_URL}login` };

export const postAccountsSignUp = (payload) =>
  apis.post(
    `https://identitytoolkit.googleapis.com/v1/accounts${payload?.path?.signUp}`,
    { ...payload, params: { key: "sdfsdfsdfsdfsd", ...payload?.params } }
  );

export const postLogin = (payload) => apis.post(API_URLS.POST_LOGIN, payload);
