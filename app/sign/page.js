export default function Sign() {
    return (
        <div className="p-20">
            <h4>회원가입</h4>
            <form action="/api/in/new" method="POST">
                <input name="id" placeholder="아이디"/>
                <input name="pw" placeholder="비밀번호"/>            
                <button type="submit">가입</button>
            </form>
        </div>
    )
}