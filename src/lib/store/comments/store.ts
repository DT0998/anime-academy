import httpService from '$service/http';
import { writable } from 'svelte/store';

interface IComment {
	created_at: Date;
	id: string | null;
	email: string | null;
	body: string;
}

const listComments = writable({ comments: [] as IComment[] });

const getListComments = async (id: string) => {
	try {
		const res = await httpService.get(
			`https://anime-art-academy-default-rtdb.firebaseio.com/comments/${id}.json`
		);
		if (res) {
			const commentsArray = Object.keys(res).map((commentId) => ({
				id: commentId,
				...res[commentId]
			}));

			// Set the comments in the store
			listComments.set({ comments: commentsArray });
		} else {
			// Handle the case where there are no comments
			listComments.set({ comments: [] as never[] });
		}
	} catch (error) {
		console.error(error);
	}
};

export { listComments, getListComments };
