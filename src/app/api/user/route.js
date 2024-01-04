import { connect } from "@/lib/dbConnection";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connect();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    throw new Error("failed to fetch posts!");
  }
};
