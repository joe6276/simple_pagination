import{useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Components/Post';
import Pagination from './Components/Pagination'


function App() {

const [posts,setPosts] = useState([]);
const [loading,setLoading]= useState(false)
const [ current, setCurrent]= useState(1);
const [postperpage]= useState(10) 
const paginate=(pageNumber)=>{ setCurrent(pageNumber)}

useEffect(() => {
  const fetchPost =async ()=>{
      setLoading(true)
      const res=  await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
  }
  fetchPost();

}, [])



console.log(posts)

const indexoflastpost= current * postperpage;
const indexofFirstpost= indexoflastpost-postperpage;
const currentposts=posts.slice(indexofFirstpost, indexoflastpost)

  return (
    <div className="container mt-5">
  <h1 className='text-primary mb-3'> Learning Pagination</h1>

  <Post  posts={currentposts} loading={loading}/>
  <Pagination postPerPage= {postperpage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
