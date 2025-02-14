export interface ServiceContent {
    overview: string;
    benefits: string[];
    procedure: string;
    duration: string;
    idealFor: string[];
    image?: string;
}

export interface Service {
    title: string;
    route: string;
    description: string;
    content: ServiceContent;
}