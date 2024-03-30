import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POSTS",
  description: "some notes about nextJs",
};

export default async function PostsPage() {

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">All posts</h1>
    </main>
  );
}