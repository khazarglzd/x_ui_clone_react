import { posts } from "../../../mock";
import Post from "../../../components/post";


export default function ForYou() {



    return (
        <>
            {posts.map((post, key) => <Post post={post} key={post.id + key} />)}
        </>
    )
}