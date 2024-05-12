import { ParamsType } from "@/types/params.types";
import { PostResponseType } from "@/types/post.types";
import { fetchApi } from "./baseApi";
import { CommentResponseType } from "@/types/comment.types";

const PREFIX = "/posts";

export const getPosts = async (
    params: ParamsType
): Promise<PostResponseType[]> => {
    const newParams = new URLSearchParams(params).toString();

    const res = await fetchApi<PostResponseType[]>(`${PREFIX}?${newParams}`, {
        method: "GET",
        next: { tags: ["POST_LIST"], revalidate: 3600 },
    });

    return res;
};

export const getPostById = async (
    postId?: string
): Promise<PostResponseType> => {
    const res = await fetchApi<PostResponseType>(`${PREFIX}/${postId}`, {
        method: "GET",
        next: { tags: ["POST_ID_LIST"] }
    });

    return res;
};

export const getPostsComments = async (
    postId: number
): Promise<CommentResponseType[]> => {
    const res = await fetchApi<CommentResponseType[]>(
        `${PREFIX}/${postId}/comments`,
        { method: "GET", next: { tags: ["COMMENT_LIST"] } },
    );
    return res;
};
