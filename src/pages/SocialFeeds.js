import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function SocialFeed( props ){
    
    return(
        <div>
            <Hero title={ props.title } />

            <Content>
                <p>Checkout and follow along with my development process below on my twitter and instagram pages.</p>

                <a class="twitter-timeline" data-theme="light" href="https://twitter.com/deveryxcv?ref_src=twsrc%5Etfw">Tweets by deveryxcv</a>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Content>
        </div>
    );
}

export default SocialFeed;