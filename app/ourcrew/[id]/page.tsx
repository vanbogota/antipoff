"use client"
import Image from "next/image";
import MyHeader from "../../../components/MyHeader";
import { useAppSelector } from "@/store/hooks";
import { PartnerDescription } from "@/components/PartnerDescription";

export default function PageWithPartner({ params }: { params: { id: string } }) {
    const partners = useAppSelector((state) => state.partners);
    const partner = partners.find(item => item.id.toString() == params.id)
    const name = `${partner?.first_name} ${partner?.last_name}`;

    return (
        <>
            <MyHeader
                title={name}
                discription="Партнер"
                pageid={2}
                image={partner?.avatar}
            />
            <section className="partner_info">
                <PartnerDescription />
                <div className="partner_info_contacts">
                    <div className="partner_contacts_detail">
                        <Image
                            src="../phone.svg"
                            alt="pic"
                            width={24}
                            height={24}
                            style={{ padding: '2px' }}
                        />
                        <p>+7 (954) 333-44-55</p>
                    </div>
                    <div className="partner_contacts_detail">
                        <Image
                            src="../mail.svg"
                            alt="pic"
                            width={24}
                            height={24}
                            style={{ padding: '1.5px' }}
                        />
                        <p>{partner?.email}</p>
                    </div>
                </div>
            </section>
        </>
    );
}



