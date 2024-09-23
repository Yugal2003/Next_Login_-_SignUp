import userModel from "@/app/models/userModel";
import connect from "@/app/utils/db";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  // Connect to the database
  await connect();

  // Check if the user already exists
  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return NextResponse.json({ message: "Email is Already Registered!" }, { status: 400 });
  }

  // Hash the password
  const hashPassword = await bcrypt.hash(password, 10); // Use a stronger hash factor

  const newUser = new userModel({
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    return NextResponse.json({ message: "User Registered Successfully!" }, { status: 201 });
  } catch (err: any) {
    console.error("Error saving user:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
