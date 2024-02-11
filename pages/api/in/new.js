import { connectDB } from "@/util/database.js"

export default async function handler(요청, 응답){
    let db = (await connectDB).db("forum");

    if (요청.method == 'POST'){
        console.log(요청.body)
        if (요청.body.id != '' && 요청.body.pw != ''){
            console.log("빈값이 아닙니다")
            if (await db.collection('user').findOne({id: 요청.body.id}) === null){
                console.log("중복되지 않은 id 입니다.");
                db.collection('user').insertOne({id: 요청.body.id, pw:요청.body.pw})
                return 응답.status(200).json('가입 완료')
            } else{
                return 응답.status(200).json('중복된 id 입니다!')
            }
        }
    }
}