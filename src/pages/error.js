import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
            <div class="error-pagewrap">
                <div class="error-page-int">
                    <div class="content-error">
                        <h1>ERROR <span class="counter"> 404</span></h1>
                        <p>Sorry, but the page you are looking for has note been found. Try checking the URL for the error, then hit the refresh button on your browser or try found something else in our app.</p>
                        <Link>
                            <a href="index.html">Dashboard</a>
                        </Link>
                        <Link><a href="#">Report Problem</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Errorpage
