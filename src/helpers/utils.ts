export const cn = (...className: unknown[]) => {
    return className.join(" ")
}

export const debounce = <F extends (...args: any[]) => any>(
    func: F,
    waitFor: number
) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<F>): Promise<ReturnType<F>> =>
        new Promise((resolve) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => resolve(func(...args)), waitFor);
        });
};
