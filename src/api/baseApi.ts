const baseURL = "https://gorest.co.in/public/v2"
const token = "fefb8c23b89124641827d37fd28855bd7b5f8bbe4ff5b614addb53a9df6eab51"

export const fetchApi = async <T>(url: string, init?: RequestInit): Promise<T> => {
    const res = await fetch(baseURL + url, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" }, ...init })
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    return await res.json()
}