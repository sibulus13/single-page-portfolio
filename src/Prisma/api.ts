'use server';
import prisma from "./prisma";

// Define types for comment and author
type Author = {
    name?: string;
    email?: string;
    role?: string;
};

type Comment = {
    rating?: number;
    text?: string;
    author?: Author;
};


// create a user and a comment
export async function addComment(comment: Comment, author: Author) {
    if (!comment.rating || !comment.text) {
        throw new Error("At least leave a comment, or a rating.");
    }
    if (author.name === "") {
        author.name = "Anonymous";
    }

    let created_author = await prisma.user.create({
        data: {
            name: author.name,
            email: author.email,
            role: author.role,
        },
    });

    await prisma.comment.create({
        data: {
            rating: comment.rating,
            text: comment.text,
            authorId: created_author.id,
        }
    });
}