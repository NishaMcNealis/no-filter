import React from 'react';
import './App.css';
import Flashlight from './components/Flashlight.js';
import koala from './img/koala2.jpg';
import flamingo from './img/flamingo.jpg';
import Navbar from './components/Navbar.js';
import clipart from './img/people.png';
import Filters from './components/Filters.js';
import visualizer from './img/cnn-vis.png';
import Magnifier from "react-magnifier";
function App() {
  return (
    <div className="App">
    <Navbar />
    <section className="blue section">
      <div className="toc-panel">
        <div className="mini-card">
          <h2>
            Today, we’ll be looking at Convolutional Neural Networks.
            We’ll aim to briefly answer the following three questions:
            <ol>
              <li> What are CNN filters? </li>
              <li> What do filters "see"? </li>
              <li> What are they used for? </li>
            </ol>
          </h2>
        </div>
        <div>
        </div>
        <div className="mini-card">
          <div className="clipart-container">
          <img id="clipart" src={clipart} alt="People working at a computer." />
          </div>
        </div>
      </div>
      </section>
      <section className="grey section">
        <div className="card">
        <h1>First, Neural Networks</h1>
        <p>Maybe you know about neural networks.
        They’re a type of classification method that uses lots of math to produce an output.
        Neural networks can do many things: classify images, voice recognition, and more.
        </p>
        <a className="link-to-slides" href="https://docs.google.com/presentation/d/1GpQkI9bcFbWteC0yxY-zg7Tt_fP-2CyG8EAWbfcL7ws/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Learn more about neural networks here!</a>
        <p>
        <em>Convolutional Neural Networks</em>, or CNNs, are a type of neural network.
        CNNs “revolve” around an image, analyzing it piece by piece. In this learning lab, we'll learn about how that works.
        </p>
        </div>
    </section>
      <section className="blue section">
        <div className="card">
          <h1>Shining a Flashlight on Filters</h1>
          <h2>Can you figure out what's in the image below using the flashlight?</h2>

        </div>
      </section>
      <section className="grey section">
        <div className="card row" id="flashlight-holder">
          <p style={{alignSelf: 'center', marginRight: '1em',}}><em>Hover your mouse/finger over the image.</em></p>
          <Flashlight />
        </div>
      </section>
      <section className="blue section">
        <div className="card">
          <img src={koala} alt="koala in a forest" id="koala-reveal-img"></img>
          <h2>If you guessed a koala: congrats, you're (basically) a CNN!</h2>
          <p>Now take a moment to think about how you actually identified the koala. First, you probably looked at each piece—edges,
            the eyes, the nose, etc—individually.
          </p>
          <p>
            Then, you put these <em>features</em> together to form bigger structures like the face and the body.
          </p>
          <p>Finally, you were able to combine the larger components to form an answer: koala.</p>
        </div>
      </section>
      <section className="grey section">
        <div className="card">
          <p>Believe it or not, CNNs work the same way! A <em>filter</em> will focus on one tiny area of an
           image at a time, analyzing the picture <em>piece by piece</em>.</p>
           <p><em>Fully-connected neural networks</em> are very different. When you look at the picture below, what do you see?</p>
        </div>
      </section>
      <section className="blue section">
        <div className="card" id="flamingo-holder">
          <img src={flamingo} id="flamingo" alt="flamingo"></img>
          <div id="side-text">
            <p>You probably recognized this picture as a flamingo instantly.
              You didn't look at the picture as legs, wings, and a beak, but rather looked at the image as a whole.
            </p>
            <p>
              This is what fully-connected neural networks do.
            </p>

          <p>So CNNs are different from fully-connected neural networks because <em>CNNs use filters to analyze
             an image one feature at a time.</em></p>
          {/* NEED TO ADD LINK */}
          <a className="link-to-slides" href="https://www.placeholder.com" target="_blank" rel="noopener noreferrer">Before we move on, check out these slides to learn more about how filters work.</a>
          </div>
        </div>
      </section>
      <section className="grey section">
        <div className="card">
          <h1>How do CNNs use filters to analyze images?</h1>
          <p>
            Filters can be used to modify the value of each pixel in an image.
            This is how Instagram or Snapchat filters work! We'll see what actual CNNs look at in a bit. For now, however, check out how we can use filters and their values to manipulate images
            and make features easier to see.
          </p>
          <p>
            <em>In this example, select different filters to see how their values correspond to the image output. What patterns do you see?</em>
          </p>
        </div>
      </section>
      <Filters />
      <section className="grey section">
        <div className="card">
          <h1>What do CNNs look like?</h1>
          <p>
            Now that we know how to apply filters, let's take a look at how one layer of a CNN might use two feature-detecting filters to create feature maps.
          </p>
        </div>
      </section>
      <section className="blue section">
      <div className="card">
       <Magnifier src={visualizer} id="cnn-vis" mgShape="square" mgWidth={100} mgHeight={100} zoomFactor="1.5" mgShowOverflow="false" alt="two filters applied to one layer of a CNN"/>
       </div>
       </section>
    </div>
  );
}

export default App;
