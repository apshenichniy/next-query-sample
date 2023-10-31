"use server"

import { Prisma } from "@prisma/client"

import { db } from "./db"

export async function getPosts() {
  const data = await db.post.findMany()
  return data
}

export async function createPost(data: Prisma.PostCreateInput) {
  const postData = await db.post.create({ data })
  return postData
}

export async function insertData() {
  const data = await db.post.create({
    data: {
      title: "Hello World",
      text: "This is my first post",
      author: "Author",
    },
  })
}
