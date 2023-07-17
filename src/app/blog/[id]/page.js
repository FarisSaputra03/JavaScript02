import Detail from "@/components/Detail";
import Users from "@/components/Users";
import { Suspense } from "react";

async function SinglePost({params : id}) {

  return  (
  <>
  <Suspense fallback={"Loading Detail..."}>
    <Detail id={id}/>
  </Suspense>
  <Suspense fallback={"Loading Users..."}>
    <Users/>
  </Suspense>
  
  </>
  );
    

  
}

export default SinglePost;