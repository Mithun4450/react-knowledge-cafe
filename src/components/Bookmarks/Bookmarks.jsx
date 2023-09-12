
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md: w-1/3 bg-gray-300 ml-4 mt-4 rounded-xl">
            <div className='bg-slate-500 rounded-xl m-4 p-4'>
                <h2 className="text-2xl text-center">Reading Time: {readingTime}</h2>
            </div>
              
            <h2 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>

           {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark = {bookmark}></Bookmark>)
           }
            
            
        </div>
            
       
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;