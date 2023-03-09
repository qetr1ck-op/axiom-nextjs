export async function getServerSideProps() {
  const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
  return {
    props: {
      posts,
    },
  };
}

export default function PostPage({ posts }: { posts: any[] }) {
  return (
    <div>
      <h1>post page</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
