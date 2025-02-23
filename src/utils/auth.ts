export const checkAuth = (): boolean => {
  return !!sessionStorage.getItem("username");
};

export const loginUser = (username: string): void => {
  sessionStorage.setItem("username", username);
};

export const getUsername = (): string | null => {
  return sessionStorage.getItem("username");
};

export const logoutUser = (): void => {
  sessionStorage.removeItem("username");
};
