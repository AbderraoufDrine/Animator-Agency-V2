import { connect } from "@/lib/dbConnection";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    connect();
    const { id } = params;
    const post = await Post.findOne({ id });
    return NextResponse.json(post);
  } catch (error) {
    throw new Error("failed to fetch post!");
  }
};
