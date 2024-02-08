import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";}


const PostDetails = () => {
  const { id } = useParams()
  const { data: post, isPending } = useGetPostById(id || '');  
  return (
    <div className="post_details-container">
      {isPending ? <Loader /> : (
        <div className="post_details-card">
          <img />
        </div>
      )}
    </div>
  )
}

export default PostDetails