import React from 'react';

const BlogDetails = ({params}) => {
    const {id} = params;
    return (
        <div>
            {id};
        </div>
    );
};

export default BlogDetails;