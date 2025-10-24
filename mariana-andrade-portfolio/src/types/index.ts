export interface Project {
    id: string;
    title: string;
    description: string;
    images: string[];
    slug: string;
    date: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}