import { getPostById, getPostsComments } from "@/api/posts.api";
import BackButton from "@/components/ui/BackButton";

export default async function PostDetail({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getPostById(postId);
  const comments = await getPostsComments(Number(postId));

  return (
    <>
      <main className="max-w-screen-sm mx-auto mt-10">
        <BackButton link="/" />
        <div className="bg-white p-6 rounded-sm mt-5">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="text-base text-gray-500 block">{post.body}</p>
          </div>

          <div className="mt-10">
            <h4 className="text-lg font-semibold">Comments</h4>
            <div className="mt-4 space-y-4 divide-y">
              {comments.map((comment, i) => (
                <div key={i} className="flex flex-col gap-1 text-sm">
                  <h4 className="text-gray-600 font-semibold">
                    {comment.name}
                  </h4>
                  <span className="text-gray-300">{comment.email}</span>
                  <p className="text-gray-500">{comment.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
