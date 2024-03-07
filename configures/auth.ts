import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', requared: true },
                password: { label: 'password', type: 'password', requared: true }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;

                const user = {
                    id: "4",
                    email: "eve.holt@reqres.in"
                }

                return user as User;
            }
        })
    ],
    pages: {
        signIn: '/signup'
    }
}