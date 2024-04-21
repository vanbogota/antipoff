export interface MyHeaderProps {
    title?: string,
    discription?: string,
    image?: string,
    pageid: number
}

export interface Partner {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
    liked: boolean;
}

export interface PartnersCardProp {
    partner: Partner
}