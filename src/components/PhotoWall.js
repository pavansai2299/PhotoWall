import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PhotoWall = (props) => {
    return (
        <div>
            <Link to='/AddPhoto' className="addIcon"></Link>
            <div className="photoGrid">
                {props.posts.sort((a,b)=>b.id-a.id).map((post,index) => <Photo key={post.id} post={post} {...props} index={index} />)}
            </div>
        </div>
    );
};

PhotoWall.propTypes = {
    posts : PropTypes.array.isRequired
}

export default PhotoWall;