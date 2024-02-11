import { connectDB } from "@/util/database.js"

export default async function handler(요청, 응답){
    let db = (await connectDB).db("forum");

    console.log(123)
    if (요청.method == 'POST'){
        console.log(요청.body)
        if (요청.body.title != '' && 요청.body.content != ''){
            console.log("빈값이 아닙니다")
            db.collection('post').insertOne({title:요청.body.title, content:요청.body.content})
            return 응답.status(200).redirect('/list')
        }
    }
}