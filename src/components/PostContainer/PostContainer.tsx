import React, {useState} from 'react';
import {postAPI} from "../../services/PostService";
import PostItem from "./PostItem/PostItem";
import {IPost} from "../../models/IPost";

const PostContainer = () => {
	const [limit, setLimit] = useState(100)
	const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)
	const [createPost, {}] = postAPI.useCreatePostMutation()
	const [updatePost, {}] = postAPI.useUpdatePostMutation()
	const [deletePost, {}] = postAPI.useDeletePostMutation()
	
	async function handleCreate() {
		const title = prompt()
		await createPost({title, body: title}as IPost)
	}
	
	function handleRemove(post: IPost) {
		deletePost(post)
	}
	
	function handleUpdate(post: IPost) {
		updatePost(post)
	}
	
	return (
		<div style={{width: '100%'}} className="post__list">
			<button onClick={handleCreate}>Добавить новую запись</button>
			{isLoading && <h3>Идёт загрузка...</h3>}
			{error && <h3>{error}</h3>}
			{posts && posts.map(post =>
				<PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
			)}
		</div>
	);
};

export default PostContainer;
