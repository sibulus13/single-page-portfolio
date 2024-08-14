import prisma from "@/Prisma/prisma";
import { RiStarFill } from "react-icons/ri";

const CommentGallery = async () => {
  const comments = await prisma.comment.findMany({
    where: {
      published: true,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="grid md:grid-cols-2 py-10">
      {comments.map((comment, index) => (
        <div key={comment.id} className="comment-container">
          <p>{comment.text}</p>
          {comment.rating && (
            <div className="flex justify-center">
              {Array(comment.rating).fill(
                <RiStarFill
                  key={`${comment.id}-${index}`}
                  className="text-yellow-500 text-3xl"
                />
              )}
            </div>
          )}
          <p className="justify-end">
            -<strong>{comment.author.name}</strong> | {comment.author.role}
          </p>
        </div>
      ))}
    </div>
  );
};
export default CommentGallery;
