import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답){
    let db = (await connectDB).db("forum");

    if (요청.method == 'POST'){
        console.log(요청.body)
        if (요청.body.id != '' && 요청.body.title != '' && 요청.body.content != ''){
            console.log("빈값이 아닙니다")
            await db.collection("post").updateOne({_id: new ObjectId(요청.body.id)}, { $set : {title:요청.body.title, content:요청.body.content} } ); 
            return 응답.status(200).redirect('/list');
        }
    }
}