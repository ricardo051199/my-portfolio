export interface Project {
    id: number,
    name: string,
    summary: string,
    description: string,
    tags: string[],
    github?: string
    demo?: string
}