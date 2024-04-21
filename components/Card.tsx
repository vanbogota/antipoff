
import Image from "next/image";
import { PartnersCardProp } from "../lib/definitions";
import { useRouter } from "next/navigation";

export default function Card({
    partner
}: PartnersCardProp) {

    const router = useRouter();

    let srcName = "unlike.svg";
    if (partner.liked) {
        srcName = "like.svg";
    }

    return (
        <div className="card" onClick={() => router.push(`/ourcrew/${partner.id}`)}>
            <div>
                <Image
                    src={partner.avatar}
                    alt="ava"
                    width={124}
                    height={124}
                    style={{ borderRadius: '50%' }}
                />
                <p>{partner.first_name} {partner.last_name}</p>
            </div>
            <button className="like">
                <Image
                    src={srcName}
                    alt="like"
                    width={14}
                    height={12}
                />
            </button>
        </div>
    );
}