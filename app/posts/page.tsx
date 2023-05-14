export async function getAllPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
    return await res.json();
}

export default async function Posts() {
const posts = await getAllPosts();

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h2 className="text-3xl font-extrabold text-gray-900">Posts</h2>
        <div className="mt-6 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post : any )=> (
            <div key={post.id} className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                <p className="mt-2 text-base text-gray-500">{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}