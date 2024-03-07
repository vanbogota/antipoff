import React from "react";
import Image from "next/image";

type ClickHandler = () => void;

interface ButtonProps {
    rotated: boolean,
    onClick: ClickHandler
}

export const MoreButton: React.FC<ButtonProps> = ({ onClick, rotated }) => {

    return <button
        className="footer__morebutton"
        onClick={onClick}
    >
        <p>Показать еще</p>
        <Image
            src="showmore.svg"
            alt="pic"
            width={24}
            height={24}
            style={{ padding: '3px 4px' }}
            className={rotated ? 'arrow-up' : 'arrow-down'}
        />
    </button>
}