"use server";

import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import { connect } from "./dbConnection";
import bcrypt from "bcrypt";

export const addPost = async (previousState, formData) => {
  const { title, desc, id, userId, img } = Object.fromEntries(formData);

  try {
    connect();
    const newPost = new Post({
      title,
      desc,
      id,
      userId,
      img,
    });

    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
    return { error: `New Post ${newPost.title} is Created!` };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connect();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (previousState, formData) => {
  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formData);

  try {
    connect();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    });

    await newUser.save();
    revalidatePath("/admin");
    return { error: `${newUser.username} Added!` };
  } catch (err) {
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connect();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
  } catch (err) {
    return { error: "Something went wrong!" };
  }
};

export const getPosts = async () => {
  noStore();
  try {
    connect();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getUsers = async () => {
  noStore();
  try {
    connect();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogOut = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password } = Object.fromEntries(formData);

  try {
    connect();
    const user = await User.findOne({ username });

    if (user) {
      return { error: "User Already Exists!" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    return { error: "Registeration Failed" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
