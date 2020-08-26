import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage( props ){
    
    return(
        <div>
            <Hero title={ props.title } />

            <Content>
                <p>I recently completed an 8 week code immersion bootcamp that focused on Ruby on rails, MVC Architecture, and OOP. This has allowed me to continue to expand my knowledge and love for programming.</p>
                <p>I am looking for a possible internship/job to help further my skills as I continue my journey into the tech industry. I have 5+ years of experience in customer service, 2+ years in logistics, and 6+ years of experience in the technology field building/diagnosing/fixing computers.</p>
                <p>Prior to my bootcamp experience, I was taking classes at the University of North Texas and University of Kansas but recently had to put that on hold due to personal reasons. Yet I have not let this stop me from pursing the career and being involved in the community that I have always loved. I enjoy learning new things especially when it comes to technology.</p>
            </Content>
        </div>
    );
}

export default AboutPage;