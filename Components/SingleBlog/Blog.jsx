"use client"
const Blog = ({blog}) => {
    const {title, description, date, author} = blog;
    const consoleData =(data)=>{
        console.log(data);
    }
    return (
        <div className="flex flex-col gap-3 p-4 items-center text-center bg-white text-black shadow-2xl border-blue-600 rounded-xl">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="flex items-center justify-between">
            <p>{author}</p>
            <p>{date}</p>

            </div>
            <button className="bg-blue-700 py-2 px-4 rounded-xl" onClick={()=>consoleData(blog)}>Clicked </button>
        </div>
    );
};

export default Blog;