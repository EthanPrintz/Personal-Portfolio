// Get all posts of certain type (blog, experiment, or project)
// type: post type (project, experiment, blog)
export async function getAllPostsOfType(type) {
  return await fetch(`http://64.227.21.239/${type}s`).then(response =>
    response.json()
  );
}

// Get single post with identifier
// type: post type (project, experiment, blog)
// id: unique post id (number)
export async function getPostFromId(type, id) {
  return await fetch(`http://64.227.21.239/${type}s/${id}`).then(response =>
    response.json()
  );
}

export async function getPostFromSlug(type, slug) {
  const posts = await getAllPostsOfType(type);
  const id = posts.filter(post => post.slug === slug)[0].id;
  return await fetch(`http://64.227.21.239/${type}s/${id}`).then(response =>
    response.json()
  );
}

// Get all classes
export async function getAllClasses() {
  return await fetch(`http://64.227.21.239/classes`).then(response =>
    response.json()
  );
}

// Get all terms
export async function getAllTerms() {
  return await fetch(`http://64.227.21.239/terms`).then(response =>
    response.json()
  );
}
