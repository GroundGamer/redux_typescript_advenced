import React, {useEffect} from 'react';
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
	// const dispatch = useAppDispatch();
	// const {users, isLoading, error} = useAppSelector(state => state.userReducer)
	//
	// useEffect(() => {
	// 	dispatch(fetchUsers())
	// }, [])
	
	return (
		<div>
			{/*{isLoading && <h1>Идёт загрузка...</h1>}*/}
			{/*{error && <h1>{error}</h1>}*/}
			{/*{JSON.stringify(users, null, 2)}*/}
			<div style={{display: 'flex'}}>
				<PostContainer/>
			</div>
		</div>
	);
}

export default App;
