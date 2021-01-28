import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

    const [blogs,setBlogs]=useState([
        {title:'My new website',body:'birinci lorems ...',author:'Sait',id:1},
        {title:'Welcome Party',body:'ikinci lorem ...',author:'Mehmet',id:2},
        {title:'Web Dev Top Tips',body:'üçüncü lorem ...',author:'Sait',id:3},
    ]);

    const handleDelete = (id)=>{
      const newBlogs = blogs.filter(blog=>blog.id !== id);
      setBlogs(newBlogs);
    }

    return (
        <div className="home">
          <BlogList blogs={blogs} title="Bütün bloglar" handleDelete={handleDelete}/>
         
        </div>
      );
}
 
export default Home;