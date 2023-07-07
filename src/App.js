import { useState } from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'sdzfgve', body: 'adsfgves'},
    {id: 2, title: 'hjhgmjy', body: 'avfae'},
    {id: 3, title: 'fff', body: 'rfbnrfb'}
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect
          defaultValue='Сортировка'
          value={selectedSort}
          onChange={sortPosts}
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>

      {posts.length
        ?<PostList remove={removePost} props={posts} title={'Список постов'} /> 
        :<h1>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
