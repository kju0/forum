import "./globals.css";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import SignupBtn from "./SignupBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


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
            ? <span>{session.user.name} <LogOutBtn/></span>
            : <span><LoginBtn></LoginBtn> <SignupBtn></SignupBtn></span>
          }
        </div>
        {children}
      </body>
    </html>
  );
}
