import React from 'react';

function Title({ title, views }) {
    return (
        <div id="title">
            <h1>
                {title}
            </h1>
            <h3>
                {views}
            </h3>


        </div>
    )
}
export default Title;