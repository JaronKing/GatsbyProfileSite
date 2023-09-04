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
            <div className="w-full max-w-xl px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
                <div className='max-w-md mx-auto space-y-6 '>
                    <h1 className="text-center">
                       Jaron King
                    </h1>

                    <h2 className="flex flex-row flex-nowrap items-center my-8">
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span className="flex-none block mx-4 px-4 py-2.5 text-m leading-none font-medium uppercase bg-red-700 text-white">
                            Resume
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>



                     <h2 className="flex flex-row flex-nowrap items-center my-8">
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span 
                            className="flex-none block mx-4 px-4 py-2.5 text-m leading-none font-medium uppercase bg-red-700 text-white" 
                            data-sal="flip-up"
                            data-sal-delay="300"
                            data-sal-easing="ease">
                            Technologies
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>

                    <div className="flex flex-row justify-center"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                        <StaticImage 
                            src="../images/php.png"
                            alt="Php Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                        />
                    </div>
                    <div className="not-prose relative bg-light-blue-400 bg-stripes bg-stripes-white rounded-xl overflow-hidden border-light-blue-200 bg-light-blue-200 rounded-md">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/symfony.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/laravel.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/codeignitor.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/cakephp.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/wordpress.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
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
                            width={100}
                        />
                    </div>
                    <div className="not-prose relative bg-cyan-400 bg-stripes bg-stripes-white rounded-xl overflow-hidden ">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/angular.png"
                                        alt="angular Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/react.png"
                                        alt="react Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/nodejs.png"
                                        alt="NodeJs Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/redux.png"
                                        alt="Redux Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/gatsby.png"
                                        alt="gatsby Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/vuejs.png"
                                        alt="VueJs Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                    </div>


                    <div className="flex flex-row justify-center">
                        <StaticImage 
                            src="../images/ubuntu.png"
                            alt="Ubuntu Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                        />
                    </div>
                    <div className="not-prose relative bg-red-200 bg-stripes bg-stripes-white rounded-xl overflow-hidden ">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/apache.png"
                                        alt="apache Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/nginx.png"
                                        alt="nginx Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/jenkins.png"
                                        alt="Jenkins Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/docker.png"
                                        alt="Docker Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/elasticbeanstalk.png"
                                        alt="Docker Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/s3buckets.png"
                                        alt="Docker Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={100}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                    </div>

                {/*<ul>



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
                </ul>*/}
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
