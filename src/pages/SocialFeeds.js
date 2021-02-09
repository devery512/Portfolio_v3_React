import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Timeline } from 'react-twitter-widgets';
import { Container } from '@material-ui/core';

function SocialFeed( props ){

    return(
        <div>
            <Hero title={ props.title } />
            <Content>
                <p>Checkout and follow along with my development process below on my twitter and instagram pages.</p>
                <Container >
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'deveryxcv'
                        }}
                        options={{
                            height: '800'
                        }}
                    />
                </Container>
                
            </Content>
        </div>
    );
}

export default SocialFeed;