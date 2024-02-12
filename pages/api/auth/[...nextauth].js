import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'id',
      ',
    }),
  ],

  secret : 'kimjooyoung'
};
export default NextAuth(authOptions); 
