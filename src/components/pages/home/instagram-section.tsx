import PostCard from "@/components/post-card";
import { posts } from "@/utils/data/posts";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-10 overflow-hidden px-1">
      <h1 className="flex gap-2 text-[var(--text)] items-center font-semibold text-lg md:text-3xl uppercase">
        <FaInstagram />
        Follow us on instagram
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default InstagramSection;
