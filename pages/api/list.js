import { connectDB } from "@/util/database.js"


export default async function handler(요청, 응답){
    let db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray();
    let today = new Date();

    let date = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" +  today.getDate();
    let localeDate = today.toLocaleDateString();
    let localeTime = today.toLocaleTimeString();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if (요청.method == 'GET'){
        응답.status(200).json({db:result, date:date, localedate:localeDate, time:time, localetime:localeTime})
    }
}