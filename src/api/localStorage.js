// *** local storage ***

// 게시글 데이터 호출
export const getPosts = () => {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
};

// 게시글 데이터 저장
export const savePosts = (posts) => {
    localStorage.setItem('posts', JSON.stringify(posts));
};

// 게시글 호출
export const getPostById = (id) => {
    const posts = getPosts();
    return posts.find((post) => post.id === id);
};

// 게시글 삭제
export const deletePostById = (id) => {
    const posts = getPosts();
    const filteredPosts = posts.filter((post) => post.id !== id);
    savePosts(filteredPosts);
};

// 게시글 수정
export const updatePost = (updatedPost) => {
    const posts = getPosts();
    const updatedPosts = posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
    );
    savePosts(updatedPosts);
};