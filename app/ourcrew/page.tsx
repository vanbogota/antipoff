"use client"
import { useSession } from "next-auth/react";
import MyHeader from "@/components/MyHeader";
import Cards from "@/components/Cards";

export default function PageWithTeam() {
    const session = useSession();
    console.log(session);
    return (
        <>
            <MyHeader
                title="Наша команда"
                discription="Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций."
                pageid={1}
            />
            <Cards />
        </>
    );
}

