import type { Blog } from '@/interfaces';
import BlogItem from './BlogItem';

interface Props {
  blogs: Blog[];
}

const BlogList = ({ blogs }: Props) => {
  const renderBlogList = () => {
    return blogs.map((blog) => {
      return (
        <div
          className='w-full'
          key={blog.id}
        >
          <BlogItem blog={blog} />
        </div>
      );
    });
  };

  return <div className='py-8 flex flex-col items-center gap-6'>{renderBlogList()}</div>;
};

export default BlogList;
