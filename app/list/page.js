import { connectDB } from "@/util/database.js"
import Link from "next/link"
import DetailLink from "./DetailLink";

export default async function List() {
    let db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray();
    // map obj 값 확인 방법
    // result.map((obj, idx)=>{
    //     console.log(obj["title"] + " " + idx)
    // })

    return (
      <div className="list-bg">
        { result.map((a,i)=>
            <div className="list-item" key={i}>
            <Link href={'/detail/' + result[i]._id}>           
                <h4>{result[i].title}</h4>
            </Link>
            <DetailLink></DetailLink><br></br>
            <Link href={'/edit/' + result[i]._id}>✍️</Link>
            <p>2월 13일</p>
            </div>
        ) }
      </div>
    )
  } 