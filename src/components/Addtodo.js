import React,{useState} from "react";

export const Addtodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
 const sub = (e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Please Fill Out All the Parameters 😍😂")
    }
    else{
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
   
  }
  return (
    
    <div className="container my-4 px-7 rt">
        <h1>Add your target work </h1>
      <form onSubmit={sub}>
        <div className="form-group">
          <label htmlFor="todotsk">Title Of the Work</label>
          <input
            type="text"
            className="form-control"
            id="todotsk"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's Your Task ?"
          />
         
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="A short description of the task"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
       <br />
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
