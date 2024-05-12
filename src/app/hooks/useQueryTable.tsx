import { useRouter, useSearchParams } from "next/navigation";

export default function useQueryTable() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paginations = (page: number = 1) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    params.set("per_page", "5");

    router.replace(`?${params.toString()}`);
  };

  const search = (q: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("name", q);
    params.set("page", "1");
    params.set("per_page", "5");

    router.replace(`?${params.toString()}`);
  };

  return { paginations, search };
}
