import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [show, setshow] = useState(false)

  const [posts , setPosts] = useState ([])
  const [Loading , setLoading] = useState(false)

  const fetchPosts = useCallback(async ()=> {
    setLoading(true)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    setPosts(data)
    setLoading(false)
  },[])

  const List = useMemo(()=>{
    return (
      <ul>
        {posts.map(user =>(
          <li>
            <span>{user.id}</span>
            <h4>{user.title}</h4>
            <p>{user.body}</p>
          </li>
        ))}
      </ul>
      )
    },[posts])
    
    useEffect(()=>{
      fetchPosts()
    },[])
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
  //     return res.json()
  //   }).then((res)=>{
  //     console.log(res)
  //     setPosts(res)
  //   })
  // },[])

  console.log(posts)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=> setshow(!show)}>
          show card
        </button >
        {show && <Card/>}
      </div>

      <hr />
      <h1>{Loading ? '...' : 'Post List'}</h1>
      {List}
    </>
  )
}

export default App
