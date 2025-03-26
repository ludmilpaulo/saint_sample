/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MediaType } from "@/utils/data/posts";
import { PiCopySimpleLight } from "react-icons/pi";
import { IoPlay } from "react-icons/io5";

type Post = {
  image: string;
  media_type: MediaType;
  url: string;
  isMultiplePost: boolean;
};
interface Props {
  post: Post;
}
const PostCard = ({ post }: Props) => {
  const { image, isMultiplePost, media_type } = post;
  return (
    <div className="h-[40vh] w-[100%] xl:w-[450px] overflow-hidden group relative cursor-pointer">
      <img
        src={image}
        alt="post"
        className="group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute top-0 w-full h-full group-hover:bg-black group-hover:opacity-70 transition-all duration-500 " />
      {isMultiplePost && (
        <PiCopySimpleLight className="absolute right-2 top-2 text-2xl text-white" />
      )}
      {media_type === MediaType.video && (
        <IoPlay className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-white text-8xl" />
      )}
    </div>
  );
};

export default PostCard;
