import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props) {
    let db = (await connectDB).db("forum");
    //array 전체 가져오기
    //let result = await db.collection('post').find().toArray();
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    console.log(props.params.id)
    
    return (
      <div>
        <h4>상세페이지</h4>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
      </div>
    )
  }