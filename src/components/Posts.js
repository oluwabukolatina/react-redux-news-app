import React from 'react';

const Posts = ({load, posts}) => {
    console.log(load);

    if(load){
        return <small>loading</small>
    }
    return (
        <div className="row">
            {(posts || []).map((headline, i) => (
                <div className="col-sm-4" key={i}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{headline.title}</h5>
                            <hr/>
                            <img className="card-img-top" src={headline.urlToImage} alt={headline.description}/>
                            <p className="card-text">{headline.content}</p>
                            <a href={headline.url} >Read More on {headline.source.id}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;