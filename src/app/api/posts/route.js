import { NextResponse } from "next/server";
import connect from "../../utils/db";
import Post from "../models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
};

//Post
export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);

  try {
    await connect();
    await newPost.save();
    return new NextResponse("Un poste a été ajouté avec succé", {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
};

//Delete Post

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();
    await Post.findByIdAndDelete(id)
    return new NextResponse("Poste a été supprimé avec succée", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
};
