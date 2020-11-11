import React from "react"
import  Helmet  from "react-helmet";
import { withPrefix} from "gatsby"
const IndexPage = () => (
  <div>
  <Helmet>
    <script src={withPrefix('index.js')} type="text/javascript"></script>
    <script type="text/javascript" src={withPrefix('TweenMax.min.js')}></script>
    <script src={withPrefix('jquery.lettering-0.6.1.min.js')}></script>
    <script src={withPrefix('jquery.superscrollorama.js')}></script>
    <script src={withPrefix('inpage.js')}></script>
    {/* <script>window.jQuery || document.write('<script src="js/jquery-1.9.1.min.js"><\/script>')</script> */}
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <link rel="author" href="https://plus.google.com/107766061849006545830"/>
    <link href='http://fonts.googleapis.com/css?family=Luckiest+Guy' rel='stylesheet' type='text/css'></link>
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js" integrity="sha512-RvUydNGlqYJapy0t4AH8hDv/It+zKsv4wOQGb+iOnEfa6NnF2fzjXgRy+FDjSpMfC3sjokNUzsfYZaZ8QAwIxg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.min.js" integrity="sha512-7nSmgdAZ7oPdT5aa2a4YauI8Y1xgaj6zZtQo9+EIEhpcNEiRHPAtyTKYckBQ0lmg1xQKrdWweHBcN/D0tdnvCw==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenLite.min.js" integrity="sha512-pvDW4tehKKsohH97164HwKwRGFpzayEFWTVbk8HuUoLIQ7Jp+WLN5XYokVuoCj2aT6dy8ihbW8SRTG1k0W4mSQ==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TimelineLite.min.js" integrity="sha512-tSIDeirKC6suYILHqqPuZH3s0MvD4a5vCHXhBIcdmq4gQXZ2IB3fEYA5x2f3D2p/CbSqzKEvuTEVbS5VZ2u+ew==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/plugins/CSSPlugin.min.js" integrity="sha512-ocsFo48WU8Xq6Y1Lwi7psXRAujG9E4TKNR4q1DbrKzaaxOMTEoao/a+mDoB+cYzY4lwbyxvqjkp/ZA1/MNlfsg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/plugins/BezierPlugin.min.js" integrity="sha512-plyexAULVlTExvDn2yUZFJV9F8q+53MC/GpU9dEuNGXmrrI3J8Rcffjvxg3OOBALBvF+UILPLIBEoCeF2maqTQ==" crossorigin="anonymous"></script> */}
  </Helmet>
  {/* <header>
    <h1>
      Gatsby Animation
    </h1>
  </header> */}
  <div id="intro">
		<h1 id="title">
			<span id="title-line1" className="title-line">Happy</span>
			<span id="title-line2" className="title-line">Diwali</span>
		</h1>
	</div>
  <div id="content-wrapper">
  <div id="examples-pin">
			
			<div id="pin-frame-slide" className="pin-frame"><h2></h2></div>
			<div id="pin-frame-wipe" className="pin-frame"><h2></h2></div>
			<div id="pin-frame-bounce" className="pin-frame"><h2></h2></div>
			<div id="pin-frame-color" className="pin-frame"><h2></h2></div>
			<div id="pin-frame-unpin" className="pin-frame"><h2></h2></div>
		</div>
  </div>
  <section className="animation">

  <img className="paper-plane" src="https://www.searchpng.com/wp-content/uploads/2019/04/Crackers-Clipart-PNG-715x715.png"/>
  </section>

	<div id="showcase">
		<h1>Things TO DO</h1>
    <p></p>
    <br/>
		<div class="gallery clearfix">
			<figure>
				<a href="#">
					<img src="https://images.unsplash.com/photo-1577083753695-e010191bacb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="things-to-do-img" alt="Ikea, Life of One Kitchen"/>
				</a>
				<figcaption><br />
					<small><a href="#"></a></small>
				</figcaption>
			</figure>
			<figure>
				<a href="#">
					<img src="https://images.unsplash.com/photo-1571913035274-3eeb685eb255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" className="things-to-do-img" alt="Alpina - Life Is Vertical"/>
				</a>
				<figcaption><br />
					<small><a href="#"></a></small>
				</figcaption>
			</figure>
			<figure>
				<a href="#">
					<img src="https://images.unsplash.com/photo-1577083753695-e010191bacb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="things-to-do-img" alt="New Škoda Octavia"/>
				</a>
				<figcaption><br />
					<small><a href="#"></a></small>
				</figcaption>
			</figure>
			<figure>
				<a href="#">
					<img src="https://images.unsplash.com/photo-1571913035274-3eeb685eb255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" className="things-to-do-img" alt="Target Exclusive Brands Site"/>
				</a>
				<figcaption><br />
					<small><a href="#"></a></small>
				</figcaption>
			</figure>
		</div>
	</div>
  </div>
)

export default IndexPage
