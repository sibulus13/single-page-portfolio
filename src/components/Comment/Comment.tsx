import CommentForm from "./CommentForm";
import CommentGallery from "./CommentGallery";
import Image from "next/image";

export default function Comment() {
  return (
    <div>
      <div className="grid relative aspect-square justify-center m-8">
        <Image
          src="/weary traveler meme.png"
          alt="Weary traveler meme: 'you have scrolled far, weary traveler. Rest, and leave a comment below."
          fill
          className="rounded-3xl"
        />
      </div>
      <CommentForm />
      <CommentGallery />
    </div>
  );
}
