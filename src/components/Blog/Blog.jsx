import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    
    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-4' src={cover} alt={`cover photo of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <div><img className='w-11 ' src={author_img} alt="" /></div>
                    <div className='ml-4'>
                        <h3 className='font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} 
                    className='ml-3 text-xl text-red-500'
                    ><FaBookmark></FaBookmark></button>


                </div>
            </div>
            <h2 className="text-3xl mb-4">{title}</h2>
           <p>
               {
                 hashtags.map((hash, idx) => <span key={idx} className='p-2'>#<a>{hash}</a></span>)

                }
           </p>

            <button 
            onClick={() =>handleMarkAsRead(id, reading_time)}
            className='mt-4 text-purple-600 font-bold underline'
            >Mark as Read</button>

            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;