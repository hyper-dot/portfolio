export const getJwtSecretKey = () => {
  const secretkey = process.env.JWT_SECRET;
  if (secretkey) {
    return secretkey;
  }
  throw new Error("Secret key not defined.");
};

// You shold put this one time when registering
export const getAdminUserName = () => {
  const userName = process.env.ADMIN_USERNAME;
  if (userName) {
    return userName;
  }
  throw new Error("Username not defined");
};

// You shold put this one time when registering
export const getAdminPassword = () => {
  const userName = process.env.ADMIN_PASSWORD;
  if (userName) {
    return userName;
  }
  throw new Error("Username not defined");
};
