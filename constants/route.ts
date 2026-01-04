const ROUTES = {
  HOME: "/",
  SIGN_IN: "/signIn",
  SIGN_UP: "/signUp",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
