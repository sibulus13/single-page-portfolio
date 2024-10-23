"use client";

import React, { useState } from "react";
import { addComment } from "@/lib/Prisma/api";
import { RiStarFill } from "react-icons/ri";

const CommentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!comment && !rating) {
        alert("Please leave a comment or provide a rating.");
        return;
      }

      let author_data = {
        name,
        email,
        role: title,
      };

      let comment_data = {
        rating,
        text: comment,
        author_data,
      };

      await addComment(comment_data, author_data);

      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setTitle("");
      setRating(null);
      setComment("");
      alert("Comment added successfully!");
    } catch (error) {
      alert("Error adding comment. Please try again later.");
      console.error("Error adding comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-container md:grid-cols-3">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="comment-input"
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="comment-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="comment-input"
      />
      <div className="flex text-3xl items-center justify-center md:col-start-2">
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
        className="comment-input md:col-span-3"
      />
      <br />
      <button
        className="clickable border-2 border-black dark:border-white rounded-3xl"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
