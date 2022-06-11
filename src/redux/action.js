import { database } from "../database/config";

export function startLoadingPosts(){
    return async (dispatch) => {
        try {
            const snapshot = await database.ref('posts').once('value');
            let posts = [];
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val());
            });
            dispatch(loadPosts(posts));
        } catch (e) {
            return console.log(e);
        } 
    }
}

export function startAddingPosts(post){
    return (dispatch) => {
             database.ref('posts').update({[post.id]:post})
                .then(()=> {
                    dispatch(addPost(post));
                    })
                .catch(e => console.log(e))
    }
}

export function startRemovingPost(index,id){
    return (dispatch) => {
        database.ref(`posts/${id}`).remove()
        .then(()=>{
            database.ref(`comments/${id}`).remove()
            .then(()=>{
                dispatch(removePost(id))
                dispatch(removeComment(id))
            }) 
        })
    }
}

export function startAddingComments(comment,postId){
    return (dispatch) => {
        console.log(postId,comment)
        database.ref('comments/'+postId).push(comment)
        .then(()=>{
            dispatch(addComment(comment,postId))
        })
        .catch(e => console.log(e))
    }
}

export function startLoadingComments(){
    return (dispatch) => {
        database.ref('comments').once('value')
        .then((snapshot)=>{
            let comments = {}
            snapshot.forEach(childSnapshot => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            });
            dispatch(loadComments(comments));
        })
        .catch(e => console.log(e))
    }
}

export function removePost(index){
    return {
        type:'REMOVE_POST',
        payload:index
    }
}

export function removeComment(postId){
    return {
        type:'REMOVE_COMMENT',
        payload:postId
    }
}


export function addPost(post){
    return {
        type:'ADD_POST',
        payload:post
    }
}

export function addComment(comment,postId){
    return {
        type:'ADD_COMMENT',
        payload:comment,
        postId:postId
    }
}

export function loadPosts(posts){
    return {
        type:'LOAD_POSTS',
        payload:posts
    }
}

export function loadComments(comments){
    return {
        type:'LOAD_COMMENTS',
        payload:comments
    }
}