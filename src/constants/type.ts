export interface PostType{
    title: string;
    desc: string;
    img: string;
}

export interface Project {
    id: number;
    name: string;
    radio: null | any; // Remplacez `any` par le type approprié si vous avez des informations sur le type
    tv: null | any; 
    ip_radio_url:null|any;   // Remplacez `any` par le type approprié si vous avez des informations sur le type
    created_at: string;
    updated_at: string;
}