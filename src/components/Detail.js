
async function getDetailPost({id}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return post;

}
async function Detail({id}) {
    const data = await getDetailPost(id);
return(
    <div className="container py-5 mx-auto">
    <div className="p-4 rounded-sm font-bold   bg-blue-600 text-white mb-5">   
            <h5>{data.title}</h5>
            <article>
                <p>{data.body}</p>
            </article>
            </div>
      </div>
      )
}

export default Detail;