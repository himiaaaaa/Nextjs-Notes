import PostsList from '@/components/postsList'
import AddPostForm from '@/components/add-post-form';
import prisma from '@/lib/db';

export default async function Home() {
  // const response = await fetch(
  //   `https://dummyjson.com/posts?limit=3`,
  //   {
  //     next: {
  //       revalidate: 3600,
  //     },
  //   }
  // );
  // const data = await response.json();

  const posts = await prisma.post.findMany();

  return (
    <main className="text-center pt-32 px-5">
      <AddPostForm />

      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Welcome to my blog
      </h1>
      
      <PostsList posts={posts} />
    </main>
  );
}
