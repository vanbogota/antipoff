'use client'
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitButton } from "./SubmitButton";
import { signIn, useSession } from "next-auth/react";
import { registerUser } from "@/store/middleware/auth-middleware";
import { useAppDispatch } from "@/store/hooks";

export default function SignUpForm() {
    const session = useSession();
    console.log(session);

    //отработка ошибок ввода
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
        if (value.trim() === '') {
            setErrors({ ...errors, [name]: true })
        } else {
            setErrors({ ...errors, [name]: false })
        }
    }

    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        const result = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        });

        if (result && !result.error) {
            dispatch(registerUser(email, password));
            router.push("/ourcrew");
        } else {
            console.log("Ошибка при авторизации:");
            console.log(result?.error);
        }

    }

    return (
        <form
            className="signup"
            onSubmit={handleSubmit}
        >
            <p>Регистрация</p>
            <label htmlFor="username">Имя</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Артур"
                value={formData.name}
                onChange={handleChange}
                required
                style={errors.name ? { border: '1px solid red' } : {}}
            />
            {errors.name && <div className="error">Ошибка</div>}

            <label htmlFor="email">Электронная почта</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.ru"
                value={formData.email}
                onChange={handleChange}
                required
                style={errors.email ? { border: '1px solid red' } : {}}
            />
            {errors.email && <div className="error">Ошибка</div>}

            <label htmlFor="password">Пароль</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="******"
                value={formData.password}
                onChange={handleChange}
                required
                style={errors.password ? { border: '1px solid red' } : {}}
            />
            {errors.password && <div className="error">Ошибка</div>}

            <label htmlFor="confirmpassword">Подтвердите пароль</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="******"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={errors.confirmPassword ? { border: '1px solid red' } : {}}
            />
            {errors.confirmPassword && <div className="error">Ошибка</div>}
            <SubmitButton />
        </form>
    );
}