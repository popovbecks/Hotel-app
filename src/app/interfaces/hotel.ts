export interface Hotel {
    id: number;
    title: string;
    address: string;
    description: string;
    phone: string;
    picture: string;
    photos: string[];
    weather: object;
    profile: object;
    stars: number;
}