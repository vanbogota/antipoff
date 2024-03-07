'use client'
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Partner } from "@/app/lib/definitions";
import { getAllPartners } from "@/app/lib/data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addPartners } from "@/store/slice/partners-slice";
import { MoreButton } from "./MoreButton";
import Image from "next/image";

export default function Cards() {
    const dispatch = useAppDispatch();
    const [partners, setPartners] = useState<Partner[]>();

    useEffect(() => {
        getAllPartners(2).then((value) => {
            dispatch(addPartners(value));
            setPartners(value.slice(0, 8));
        })
    }, []);

    const allPartners = useAppSelector((store) => store.partners);

    let initial = allPartners.slice(0, 8);
    let more = allPartners.slice(8, 12);

    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore)
        setPartners(showMore ? initial : [...initial, ...more])
    }

    return (
        <>
            <div className="cards">
                {partners?.map((partner) => (
                    <Card
                        key={partner.id}
                        partner={partner}
                    />
                ))}
            </div>
            <div className="footer">
                <button onClick={handleClick}>
                    <p>Показать еще</p>
                    <Image
                        src="showmore.svg"
                        alt="pic"
                        width={24}
                        height={24}
                        style={{ padding: '3px 4px' }}
                    />
                </button>
            </div>
        </>
    )
}
