import { connect } from "@/lib/dbConnection";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connect();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    throw new Error("failed to fetch posts!");
  }
};
