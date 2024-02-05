import { NextRequest, NextResponse } from "next/server";
import { connectdb } from "@/server/utils/connectdb";
import Admin from "@/server/models/admin.model";
import bcrypt from "bcryptjs";

import { nanoid } from "nanoid";
import { SignJWT } from "jose";
import {
  getAdminPassword,
  getAdminUserName,
  getJwtSecretKey,
} from "@/constants/auth";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    await connectdb();
    // Check if the user entered the username and password
    if (!body.username || !body.password) {
      return NextResponse.json("Username and Password is required.", {
        status: 401,
      });
    }

    const user = await Admin.findOne({ username: body.username });

    console.log(user);

    if (user) {
      const isPasswordValid = await bcrypt.compare(
        body.password,
        user.password || "",
      );
      if (isPasswordValid) {
        const token = await new SignJWT({ body })
          .setProtectedHeader({ alg: "HS256" })
          .setJti(nanoid())
          .setIssuedAt()
          .setExpirationTime("2h")
          .sign(new TextEncoder().encode(getJwtSecretKey()));
        const response = NextResponse.json("Logged in successfully.", {
          status: 200,
        });
        response.cookies.set("token", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 2, // 2 hours in seconds
        });
        return response;
      } else {
        return NextResponse.json("Invalid username or password.", {
          status: 403,
        });
      }
    } else {
      return NextResponse.json("Invalid username or password.", {
        status: 401,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await connectdb();
    const username = getAdminUserName();
    const password = getAdminPassword();
    const admin = await Admin.findOne({ username });
    console.log(admin);
    if (admin)
      return NextResponse.json("Admin already registered.", { status: 200 });

    if (password.length < 8) {
      return NextResponse.json("Password must be more than 8 characters.", {
        status: 400,
      });
    }
    const hash = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({
      username,
      password: hash,
    });
    await newAdmin.save();

    return NextResponse.json("Admin created successfully !", {
      status: 201,
    });
  } catch (err) {
    return NextResponse.json("Something went wrong !", {
      status: 500,
    });
  }
};
