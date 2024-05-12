import { getPostsComments } from "@/api/posts.api";
import { FaRegMessage } from "react-icons/fa6";

interface PostProps {
  postId: number;
}
export default async function Comment({ postId }: PostProps) {
  const comments = await getPostsComments(postId);

  return (
    <div>
      <div className="relative w-fit group">
        <FaRegMessage className="text-gray-300 text-2xl group-hover:text-gray-500" />

        <span className="text-gray-400 group-hover:text-gray-600 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center text-xs">
          {comments.length}
        </span>
      </div>
    </div>
  );
}
