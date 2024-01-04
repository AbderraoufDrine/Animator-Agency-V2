import { connect } from "@/lib/dbConnection";
import { User } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    connect();
    const { id } = params;
    const user = await User.findById(id);
    return NextResponse.json(user);
  } catch (error) {
    throw new Error("failed to fetch user!");
  }
};
