import { getJwtSecretKey } from "@/constants/auth";
import { jwtVerify } from "jose";

export async function verifyJwtToken(token: string) {
  try {
    await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
    return true;
  } catch (error) {
    console.log("VERIFY JWT ERROR :", error);
    return null;
  }
}
