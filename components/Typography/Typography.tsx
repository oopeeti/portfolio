import { cn } from "@/lib/utils"

type ElementType = {
    children: React.ReactNode
    className?: string
}

export function H1({ children, className }: ElementType) {
    return (
        <h1 className={cn("scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl", className)}>
            {children}
        </h1>
    )
}

export function H2({ children, className }: ElementType) {
    return (
        <h2 className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
            {children}
        </h2>
    )
}

export function H3({ children, className }: ElementType) {
    return (
        <h3 className={cn("scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight", className)}>
            {children}
        </h3>
    )
}

export function H4({ children, className }: ElementType) {
    return (
        <h4 className={cn("scroll-m-20 text-lg lg:text-xl font-semibold tracking-tight", className)}>
            {children}
        </h4>
    )
}

export function P({ children, className }: ElementType) {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6 text-md")}>
            {children}
        </p>
    )
}

export function Blockquote({ children, className }: ElementType) {
    return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
            {children}
        </blockquote >
    )
}

export function Italic({ children, className }: ElementType) {
    return (
        <blockquote className={cn("mt-6 italic", className)}>
            {children}
        </blockquote >
    )
}

export function Lead({ children, className }: ElementType) {
    return (
        <p className={cn("text-xl text-muted-foreground", className)}>
            {children}
        </p>
    )
}

export function Large({ children, className }: ElementType) {
    return <div className={cn("text-lg font-semibold", className)}>{children}</div>
}

export function Small({ children, className }: ElementType) {
    return (
        <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>
    )
}

export function Muted({ children, className }: ElementType) {
    return (
        <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
    )
}