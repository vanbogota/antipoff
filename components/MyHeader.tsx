"use client"
import Image from "next/image";
import { MyHeaderProps } from "../lib/definitions";
import { useRouter } from "next/navigation";
import ExitButton from "./ExitButton";

export default function MyHeader({ title, discription, image, pageid }: MyHeaderProps) {

    const router = useRouter();

    if (pageid <= 1) {
        return (
            <header className="header_page_crew">
                <ExitButton />
                <h1 >{title}</h1>
                <p>{discription}</p>
            </header>
        );
    } else {
        return (
            <header className="header_page_partner">
                <button id="backbutton" onClick={() => router.push('/ourcrew')}>Назад</button>
                <ExitButton />
                {image && <Image
                    src={image}
                    alt="img"
                    width={187}
                    height={187}
                    style={{ borderRadius: '50%', marginLeft: '188px' }}
                />}
                <div className="header_partner_info">
                    <h1>{title}</h1>
                    <p>{discription}</p>
                </div>
            </header>
        );
    }
}