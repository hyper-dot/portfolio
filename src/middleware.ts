import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "./server/utils/auth";
export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathName = req.nextUrl.pathname;

  if (pathName.startsWith("/admin")) {
    if (token) {
      const res = await verifyJwtToken(token);
      const redirectUrl = new URL("/auth", req.nextUrl);
      if (!res) return NextResponse.redirect(redirectUrl);
      return NextResponse.next();
    }
    return NextResponse.redirect(req.nextUrl.origin);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
