import PostItem from './PostItem'

export default function PostList({props, title, remove}) {

    if(!props.length) {
        return (
            <h1>Посты не найдены!</h1>
        )
    }

    return (
        <>
            <h1>
                {title}
            </h1>
            {props.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </>
    )
}
