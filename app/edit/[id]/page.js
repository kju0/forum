import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"


export default async function Edit(props) {
    let db = (await connectDB).db("forum");
    //array 전체 가져오기
    //let result = await db.collection('post').find().toArray();
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    console.log(props.params.id)
    return (
        <div className="p-20">
            <h4>글 수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input type="hidden" name="id" value={props.params.id}/>
                <input name="title" defaultValue={result.title}/>
                <input name="content" defaultValue={result.content}/>            
                <button type="submit">저장</button>
            </form>
        </div>
    )
}