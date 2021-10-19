import React, {FC} from 'react';
import {IPost} from "../../../models/IPost";

interface PostItemProps {
	post: IPost;
	remove: (post: IPost) => void;
	update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
	
	
	function handleRemove(event: React.MouseEvent) {
		event.stopPropagation()
		remove(post)
	}
	
	function handleUpdate() {
		const title = prompt() || ""
		update({...post, title})
	}
	
	return (
		<div onClick={handleUpdate} style={{margin: 10, border: '1px dashed blue', padding: 10, display: 'flex', justifyContent: 'space-between'}} className='postItem'>
			<p style={{padding: 0, margin: 0}}>{post.id}. {post.title}</p>
			<button onClick={handleRemove}>Delete</button>
		</div>
	);
};

export default PostItem;
