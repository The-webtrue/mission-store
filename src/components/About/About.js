import React from 'react';

const About = () => {
    return (
        <main>
           <div className='about'>
                <div className='pg-header'>
                    <div className='container'>
                        <h1>About</h1>
                    </div>
                </div>
            <div className='container content'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h2>Why Choose Us.</h2>
                        <p>You want results. We have found that the best way to get them is with up front research – of your company, competitors, target market and customer psychographics. Only after we fully understand you and your customers, do we recommend a plan of attack.</p>
                    </div>
                    <div className='col-lg-4'>
                        <h2>Our Mission.</h2>
                        <p>Well, there's a good reason for it — because of their values which are expressed in their mission statement. As consumers, we like to patronize businesses that have values we believe in.Still, Loyalty doesn’t happen overnight. Building brand loyalty, like creating mission and vision statements, takes time. </p>
                    </div>
                    <div className='col-lg-4'>
                        <h2>What we Do.</h2>
                        <p>As a business or organization, what’s a “good” text message to send to your customers, clients, or stakeholders? Really anyone can send a text that people would like… “Hey Roger, you’ve won several billion dollars tax free, go forth and prosper!” </p>
                    </div>
                </div>
            </div>
           </div>
        </main>
    );
};

export default About;