import React from 'react';
import Blog from '../components/blog/Blog';
import Blog1 from '../components/blog1/Blog1';
import Blog2 from '../components/blog2/Blog2';
import BlogSlider from '../components/blogSlider/BlogSlider';
import TitleHead from '../components/titleHead/TitleHead';


const BlogP = () => {
  return (
    <div className='container'>
        <TitleHead subTitle='Recent Events' title='Blog Post'/>
        <Blog2/>
        <BlogSlider/>
      <Blog/>
      <Blog1/>
      

    </div>
  );
}

export default BlogP;
