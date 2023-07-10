import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
            <TransitionGroup>
                {props.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    )
}
