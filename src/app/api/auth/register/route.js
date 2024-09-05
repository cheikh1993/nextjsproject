import connect from "@/app/utils/db";
import User from "../../models/User";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  try {
    const hashedPassword = await bcryptjs.hash(password, 5);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return new NextResponse("User creates successfully", {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
