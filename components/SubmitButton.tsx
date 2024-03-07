import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            id="submitbutton"
            aria-disabled={pending}
        >
            Зарегестрироваться
        </button>
    )
}