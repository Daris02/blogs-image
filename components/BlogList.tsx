'use client'

import React from 'react'
import { notFound, useRouter } from 'next/navigation';
import blogsList from '@/utils/data/blogList';

function BlogList() {
  const router = useRouter();

  return (
    <div className='container py-2'>
      <h2>Blogs List</h2>
      <ul>
      {
        blogsList.map((blog) => {
          return <li><a key={blog.id} onClick={() => router.push(`/blog/${blog.id}/image`)}>Image {blog.id}</a></li>
        })
      }
      </ul>
    </div>
  )
}

export default BlogList