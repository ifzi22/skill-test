export type TodosResponseType = {
    id: number
    user_id: number
    title: string
    due_on: string
    status: "completed" | "pending"
}