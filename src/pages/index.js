import React from "react" 
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import anime from "animejs"
import Layout from "../components/Layout"

const Index = ({ data }) => {
    const {
        site: {
            siteMetadata: { name, role },
        },
    } = data;

    return (
        <>
        {console.log(role)}
        <Layout>
            <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
                <div class='max-w-md mx-auto space-y-6'>
                     <h2 class="flex flex-row flex-nowrap items-center my-8">
                        <span class="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span class="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white">
                            Technologies
                        </span>
                        <span class="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>
                </div>
                <ul>
                    <li>
                        PHP
                        <StaticImage 
                            src="../images/php.png"
                            alt="Php Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={50}
                        />
                        <p>Frameworks</p>
                        <ul>
                            <li>Symfony
                                <StaticImage 
                                    src="../images/symfony.png"
                                    alt="Php Logo"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={50}
                                />
                            </li>
                            <li>Laravel
                                <StaticImage 
                                    src="../images/laravel.png"
                                    alt="Php Logo"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={50}
                                />
                            </li>
                            <li>Codeignitor
                                <StaticImage 
                                    src="../images/codeignitor.png"
                                    alt="Php Logo"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={50}
                                />
                            </li>
                            <li>CakePHP
                                <StaticImage 
                                    src="../images/cakephp.png"
                                    alt="Php Logo"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={50}
                                />
                            </li>
                            <li>WordPress
                                <StaticImage 
                                    src="../images/wordpress.png"
                                    alt="Php Logo"
                                    placeholder="blurred"
                                    layout="fixed"
                                    width={50}
                                />
                            </li>
                        </ul>
                  </li>

                <li>
                  <p>Javascript</p>
                  <p>Frameworks/Libraries</p>
                  <ul>
                    <li>Angular</li>
                    <li>React</li>
                    <li>JQuery</li>
                    <li>Node</li>
                    <li>Redux</li>
                    <li>Gatsby</li>
                    <li>Johnny 5</li>
                    <li>VueJs</li>
                    <li>Mustache</li>
                  </ul>
                </li>
                <li>
                  <p>CSS</p>
                  <p>Frameworks/Libraries</p>
                  <ul>
                    <li>Bootstrap</li>
                    <li>Landing Page Design</li>
                    <li>Email Marketing</li>
                  </ul>
                </li>
                <li>
                  <p>Server Technologies</p>
                  <ul>
                    <li>Apache</li>
                    <li>Nginx</li>
                    <li>NodeJs</li>
                    <li>AWS Elastic Beanstalk</li>
                    <li>Buckets</li>
                    <li>Jenkins</li>
                    <li>Docker</li>
                    <li>Ubuntu</li>
                  </ul>
                </li>
                <li>
                  <p>Databases</p>
                  <ul>
                    <li>MySQL</li>
                    <li>MSSql</li>
                    <li>Firebase</li>
                  </ul>
                </li>
                <li>Python</li>
              </ul>

</div>



                
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    site {
        siteMetadata {
            name
            role
        }
    }
  }
  `

export default Index

// const circle  = {
//     height: '50px',
//     width: '50px',
//     borderRadius: '50%',
//     backgroundColor: 'red',
// }

        // <div className="circle" style={circle}></div>
    // function getScrollPercent() {
    //    var h = document.documentElement,
    //    b = document.body,
    //    st = 'scrollTop',
    //    sh = 'scrollHeight';
    //    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    //  }

    // const els = document.querySelectorAll('.circle');
    // const tl = anime.timeline({ autoplay: false });

    // window.addEventListener('scroll', () => {
    //     const percentage = getScrollPercent();
    //     console.log(percentage);
    //     tl.seek(tl.duration * (percentage * 0.01));
    // });

    // const animationRef = React.useRef(null);
    // React.useEffect(() => {
    //     animationRef.current = anime({
    //         op: anime.random(0, 150) + 'vh',
    //         left: anime.random(0, 100) + 'vw',
    //         targets: '.circle',
    //         translateX: 250,
    //         duration: 4000,
    //         delay: anime.stagger(200, {start: 1000}),
    //         seek: percentage,
    //     });
    // });
