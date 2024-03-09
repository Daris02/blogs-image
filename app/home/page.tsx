import BlogList from '@/components/BlogList'
import React from 'react'

export default function Home() {
  return (
    <section className='container'>
      <div className="w-full p-40">
        <h1 className='text-xl'>Home</h1>
        <BlogList />
      </div>
    </section>
  )
}
