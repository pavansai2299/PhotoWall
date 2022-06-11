import React,{useEffect, useState} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Link, Route } from 'react-router-dom';
import Single from './Single';

const Main = (props) => {

    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        props.startLoadingPosts().then(()=>{
            setLoading(false);
        })
        props.startLoadingComments()
    },[])

    return (
        <div>
            <h1>
                <Link to='/'>Photowall</Link>
            </h1>
            <Route exact path='/' render={()=>(
                <div>
                    {/* <Title name="Photowall" /> */}
                    <PhotoWall {...props} />
                </div> 
            )}/>
            <Route path='/AddPhoto' render={()=>(
                <AddPhoto {...props} />
            )} />
            <Route path='/single/:id' render={(params)=>(
                <Single loading={loading} {...props} {...params}/>
            )} />
    
        </div>
    );
};

export default Main;