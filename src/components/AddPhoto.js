import React from 'react';

const AddPhoto = (props) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const imageLink = e.target.elements.link.value;
        const description = e.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description:description,
            imageLink:imageLink
        }
        if(description && imageLink){
            // props.addPost(post)
            props.startAddingPosts(post);
            props.history.push('/')
        }
    }

    return (
        <div>
            {/* <h1>Photowall</h1> */}
            <div className='form'> 
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder='Link' name='link' />
                    <input type="text" placeholder='Description' name='description' />
                    <button>Post</button>
                </form>
            </div>
        </div>
    );
};

export default AddPhoto;