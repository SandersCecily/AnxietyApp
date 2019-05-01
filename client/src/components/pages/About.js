import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>About Anxiety</h2>
                </div>
                <div className="row">
                    <div className="col">
                    <h4>What is Anxiety?</h4>
                        <p className="flow-text">
                            Generally speaking anxiety is an emotional response that every human can experience. People most often think of anxiety when they imagine public speaking. For some that is a form of anxiety but it's important to know that type of anxiety isn't what doctors are diagnosing when they treat a patient. </p>
                        <p className="flow-text">
                            Anxiety is used more as an umbrella term for multiple types of disorders. For it to be diagnosable the effects of the anxiety need to be pervasive, and disruptive to the sufferers life over a span of significant time. Extreme examples of this can be the inability to leave their house because of fear of social interaction, a fear of having a panic attack to the point which then triggers an attack, or someone who compulsively washes their hands past the point of bleeding. The sufferers thought patterns can also cause destructive behaviors (i.e self harm, substance abuse) as coping mechanisms.</p>
                        <p className="flow-text">
                            Anxiety disorders can be classified two ways, one being a distress disorder (generalized anxiety disorder, and post traumatic stress disorder) and another being fear disorders (social anxiety or specific phobias).

                        </p>
                        <br />
                        <h4>Why do people suffer from it?</h4>
                        <p className="flow-text">
                            There are a number of reasons that someone can suffer from an anxiety disorder and part of that is dependent on which anxiety disorder as well as what's surrounding it. Its true that some anxiety disorders are something that people are naturally born with, but some are more dispositioned to it, while other people can go through immense trauma and from that point suffer from these types of issues.</p>
                        <br />
                        <h4>How can I help?</h4>
                        <p className="flow-text">
                            How to help a sufferer of anxiety is completely dependant on that person. Anxiety is as unique as people are. Try having a discussion if you feel you can truly help that person. If not you could point them in the direction of services and options so that they can help themselves. It's important to know that it's not necessarily bad to give someone struggling room to breathe should they want or need it. </p>
                        <p className="flow-text">
                            There are things that you can keep in mind if you are working to help someone with their anxiety.
                        </p><br/>
                        <blockquote>
                        <ul className="flow-text">
                            <li>Their reaction is NOT personal</li>
                            <li>There ARE physical symptoms</li>
                            <li></li>
                        </ul>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;