import React from "react" 
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
                <div className='max-w-md mx-auto space-y-6 '>
                    <h1 className="text-center">
                       Jaron King
                    </h1>

                    <h2 className="flex flex-row flex-nowrap items-center my-8">
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span className="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white">
                            Resume
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>

                     <h2 className="flex flex-row flex-nowrap items-center my-8">
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span className="flex-none block mx-4 px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white">
                            Technologies
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>

                    <div className="flex flex-row justify-center">
                        <StaticImage 
                            src="../images/php.png"
                            alt="Php Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={50}
                        />
                    </div>
                    <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden ">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-start space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/symfony.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/laravel.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/codeignitor.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/cakephp.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/wordpress.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                    </div>


                    <div className="flex flex-row justify-center">
                        <StaticImage 
                            src="../images/javascript.png"
                            alt="Javascript Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={50}
                        />
                    </div>
                    <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden ">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-start space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/angular.png"
                                        alt="angular Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/react.png"
                                        alt="react Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/nodejs.gif"
                                        alt="NodeJs Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/redux.png"
                                        alt="Redux Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/gatsby.png"
                                        alt="gatsby Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg">
                                    <StaticImage 
                                        src="../images/vuejs.png"
                                        alt="VueJs Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                    </div>




                <ul>



                  {/*<p>Javascript</p>
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
                  </ul>*/}
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
                <div>
                    <h2 className="flex flex-row flex-nowrap items-center my-8">
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span className="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white">
                            Projects
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>
                </div>
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


// import anime from "animejs"
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
