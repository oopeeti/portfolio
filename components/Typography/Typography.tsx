type ElementType = {
    children: React.ReactNode
}

export function H1({ children }: ElementType) {
    return (
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            {children}
        </h1>
    )
}

export function H2({ children }: ElementType) {
    return (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    )
}

export function H3({ children }: ElementType) {
    return (
        <h3 className="scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    )
}

export function H4({ children }: ElementType) {
    return (
        <h4 className="scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight">
            {children}
        </h4>
    )
}

export function P({ children }: ElementType) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    )
}

export function Blockquote({ children }: ElementType) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote >
    )
}

export function Lead({ children }: ElementType) {
    return (
        <p className="text-xl text-muted-foreground">
            {children}
        </p>
    )
}

export function Large({ children }: ElementType) {
    return <div className="text-lg font-semibold">{children}</div>
}

export function Small({ children }: ElementType) {
    return (
        <small className="text-sm font-medium leading-none">{children}</small>
    )
}

export function Muted({ children }: ElementType) {
    return (
        <p className="text-sm text-muted-foreground">{children}</p>
    )
}