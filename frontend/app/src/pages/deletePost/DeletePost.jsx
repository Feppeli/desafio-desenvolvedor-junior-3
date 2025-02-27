import NavBarHome from "../../components/navBar home/NavBarHome";
import blogFetch from "../../axios/config";
import { useState } from "react";
import './deletePost.css'

const DeletePost = ({id, validateToken}) => {

  if(!id){
    window.location.assign("/");
  } else {
    validateToken();
  }
  
  
    const [title, setTitle] = useState("");

    async function handleDelete(e){
        e.preventDefault()
            await blogFetch.delete(`/posts/${title}`).then(() => {
                alert('Exclusão feita com sucesso!')
                window.location.assign("/home");
            }).catch((err) => {
                console.log(err)
            })
    }
  return (
    <>
      <NavBarHome />
      <main className="deletePost">
        <h1>Delete post</h1>
        <form action="">
          <input
            type="text"
            placeholder="title"
            id="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="buttonBox">
            <button type="submit" onClick={(e) => handleDelete(e)}>
              Delete
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default DeletePost;
