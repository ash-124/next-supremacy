import Blog from '@/Components/SingleBlog/Blog';

const Blogs = () => {
    const blogs = [
        {
          "id": 1,
          "title": "The Future of Web Development in 2025",
          "author": "Liam Carter",
          "date": "2025-05-01",
          "content": "Web development is rapidly evolving with the rise of AI tools, JAMstack, and serverless architecture...",
          "tags": ["Web Development", "AI", "Technology"],
          "imageURL": "/images/blog1.jpg"
        },
        {
          "id": 2,
          "title": "10 Productivity Hacks for Remote Developers",
          "author": "Sara Lin",
          "date": "2025-04-22",
          "content": "Working from home can be distracting. Here are 10 tried-and-true methods to stay focused and productive...",
          "tags": ["Productivity", "Remote Work", "Developer Tips"],
          "imageURL": "/images/blog2.jpg"
        },
        {
          "id": 3,
          "title": "Understanding JavaScript Closures",
          "author": "Daniel Kim",
          "date": "2025-04-18",
          "content": "Closures can be confusing for beginners. In this post, we'll break them down in simple terms with examples...",
          "tags": ["JavaScript", "Programming", "Closures"],
          "imageURL": "/images/blog3.jpg"
        },
        {
          "id": 4,
          "title": "A Beginner's Guide to Tailwind CSS",
          "author": "Emily Zhao",
          "date": "2025-03-30",
          "content": "Tailwind CSS offers utility-first classes that make designing fast and consistent. Learn how to get started...",
          "tags": ["CSS", "Tailwind", "Frontend"],
          "imageURL": "/images/blog4.jpg"
        },
        {
          "id": 5,
          "title": "Why You Should Learn TypeScript in 2025",
          "author": "Mohamed Nasser",
          "date": "2025-03-15",
          "content": "TypeScript enhances JavaScript with type safety. Discover why it's becoming a must-have skill for devs...",
          "tags": ["TypeScript", "JavaScript", "Programming Languages"],
          "imageURL": "/images/blog5.jpg"
        },
        {
          "id": 6,
          "title": "The Rise of No-Code Tools for Entrepreneurs",
          "author": "Jessica Green",
          "date": "2025-02-27",
          "content": "No-code platforms are empowering non-tech founders. Explore the top tools and their use cases...",
          "tags": ["No-Code", "Startups", "Innovation"],
          "imageURL": "/images/blog6.jpg"
        },
        {
          "id": 7,
          "title": "Creating a Personal Brand as a Developer",
          "author": "Tariq Hassan",
          "date": "2025-01-20",
          "content": "Building a personal brand can open up career opportunities. Learn how to start with blogs, portfolios, and networking...",
          "tags": ["Career", "Branding", "Developer Life"],
          "imageURL": "/images/blog7.jpg"
        }
      ]
      
    return (
        <div className=' my-10'>
            <h3 className='text-center text-2xl font-bold my-5'>Blogs</h3>
            <div className='grid grid-cols-3 gap-3 items-center justify-center'>
                {
                    blogs.map(blog=><Blog key={blog.id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default Blogs;