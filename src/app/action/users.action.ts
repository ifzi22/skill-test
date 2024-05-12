"use server";

import { fetchApi } from "@/api/baseApi";
import { ParamsType } from "@/types/params.types";
import { UserResponseType } from "@/types/user.types";
import { revalidateTag } from "next/cache";

const PREFIX = "/users";

export const getUsers = async (
    params?: ParamsType
): Promise<UserResponseType[]> => {
    const newParams = new URLSearchParams(params).toString();

    const res = await fetchApi<UserResponseType[]>(`${PREFIX}?${newParams}`, {
        method: "GET",
        next: { tags: ["USERS_LIST"] },
    });
    return res;
};

export const createUser = async (body: FormData): Promise<unknown> => {
    const res = await fetchApi(PREFIX, { method: "POST", body: body });
    revalidateTag("USERS_LIST");
    return res;
};

export const updateUser = async (
    id: number,
    body: FormData
): Promise<unknown> => {
    const res = await fetchApi(`${PREFIX}/${id}`, { method: "PUT", body: body });
    revalidateTag("USERS_LIST");
    return res;
};

export const deleteUser = async (id: number): Promise<unknown> => {
    await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: "DELETE",
        headers: {
            Authorization:
                "Bearer fefb8c23b89124641827d37fd28855bd7b5f8bbe4ff5b614addb53a9df6eab51",
        },
    });
    revalidateTag("USERS_LIST");
    return "";
};
