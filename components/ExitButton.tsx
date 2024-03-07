import { useAppDispatch } from "@/store/hooks";
import { logOut } from "@/store/slice/auth-slice";
import { signOut } from "next-auth/react"

export default function ExitButton() {
    const dispatch = useAppDispatch()

    return <button
        id="exitbutton"
        onClick={() => {
            dispatch(logOut());
            signOut({ callbackUrl: '/' })
        }}
    >
        Выход
    </button>
}