import { useParams } from "react-router-dom"
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useEffect, useState } from "react";
import Loader from "../components/UI/loader/Loader";
import cssClasses from "../styles/PostIdPage.module.css";

export default function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id);
        setPost(response.data)
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data)
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div className={cssClasses.wrapper}>
            <h1 className={cssClasses.title}>
                Вы открыли страницу поста с ID = {params.id}
            </h1>
            {isLoading
                ? <Loader />
                :   <div>
                        <p>{post.id}. {post.title}</p>
                        <p>{post.body}</p>
                    </div>
            }
            <h1>Комментарии</h1>
            {isComLoading
                ?<Loader />
                :<div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>)}
                </div>
            }
        </div>
    )
}
