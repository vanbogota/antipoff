'use client'
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Partner } from "@/app/lib/definitions";
import { getAllPartners } from "@/app/lib/data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addPartners } from "@/store/slice/partners-slice";
import { MoreButton } from "./MoreButton";

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
    const [rotated, setRotated] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore)
        setPartners(showMore ? initial : [...initial, ...more])
        setRotated(!rotated);
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
                <MoreButton
                    onClick={handleClick}
                    rotated={rotated}
                />
            </div>
        </>
    )
}
