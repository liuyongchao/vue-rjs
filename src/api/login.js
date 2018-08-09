import request from "@/utils/request";

export function login(username, password, remember) {
  return request({
    url: "/login",
    method: "post",
    data: {
      username,
      password,
      remember
    }
  });
}

export function getInfo(token) {
  return request({
    url: "/userinfo",
    method: "get",
    params: { token }
  });
}

export function logout() {
  return request({
    url: "/user/logout",
    method: "post"
  });
}
