import { getPosts } from "@/api/posts.api";
import Pagination from "@/components/pagination/Pagination";
import { ParamsType } from "@/types/params.types";
import Comment from "./_features/components/Comment";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: ParamsType;
}) {
  const params: ParamsType = searchParams.per_page
    ? searchParams
    : { page: "1", per_page: "5" };

  const postData = await getPosts(params);

  return (
    <main className="max-w-screen-sm mx-auto bg-white rounded-sm mt-10 p-6">
      <div className="divide-y-2">
        {postData.map(({ body, title, id }, i) => (
          <Link
            href={`/${id}`}
            key={i}
            className="flex flex-col gap-4 py-7 group"
          >
            <h1 className="text-xl font-semibold text-gray-600 group-hover:underline">
              {title}
            </h1>
            <p className="line-clamp-2 text-gray-400">{body}</p>
            <Comment postId={id} />
          </Link>
        ))}
      </div>
      <div className="mt-10 block w-full">
        <Pagination />
      </div>
    </main>
  );
}
