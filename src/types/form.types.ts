export type ACTION_TYPE = "CREATE" | "EDIT" | "DELETE"

export type OptionsType<T = ""> = {
    label: string
    value: string | number | readonly string[]
    additionalOptions?: T
}