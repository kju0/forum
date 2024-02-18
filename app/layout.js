import "./globals.css";
import Link from "next/link";
import SignUpBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import SignInBtn from "./SignupBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import HeaderProfile from './UserBtn'


export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  if (session) {
    console.log(session)
  }

  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/" className="logo">Ju0 Forum</Link>
          <Link href="/list">List</Link>
          {
            session
              ? <span><HeaderProfile /> <LogOutBtn /></span>
              : <span><SignInBtn></SignInBtn> <SignUpBtn></SignUpBtn></span>
          }
        </div>
        {children}
      </body>
    </html>
  );
}
