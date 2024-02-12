import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'bbe12a89ce2ddfa5ed5f',
      clientSecret: '3c380b3af055aef976f637c303f187b75c7e19ff',
    }),
  ],

  secret : 'kimjooyoung2024dev'
};
export default NextAuth(authOptions); 