"use client";
import React, { useState } from "react";
import prisma from "@/Prisma/prisma";
import { RiStarFill } from "react-icons/ri";

const CommentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating && !comment) {
      alert("Please provide a rating, or a comment");
      return;
    }
    try {
      // Create a user
      const user = await prisma.user.create({
        data: {
          name,
          email,
          role: title,
        },
      });

      // Create a comment using the created user
      await prisma.comment.create({
        data: {
          rating,
          text: comment,
          authorId: user.id,
        },
      });

      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setTitle("");
      setRating(null);
      setComment("");

      console.log("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-container">
      <div className="col-span-1">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="comment-input"
        />
      </div>
      <div className="col-span-1">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="comment-input"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="comment-input"
        />
      </div>
      <div className="flex text-3xl items-center justify-center">
        {[1, 2, 3, 4, 5].map((value) => (
          <RiStarFill
            key={value}
            className={value <= rating ? "text-yellow-500" : "text-gray-400"}
            onClick={() => setRating(value)}
          />
        ))}
      </div>
      <textarea
        placeholder="Leave a comment!"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="comment-input"
      />
      <br />
      <button className="clickable border-2 rounded-3xl" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
