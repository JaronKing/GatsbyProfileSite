import React from "react" 
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const Index = ({ data }) => {
    const {
        site: {
            siteMetadata: { name, role },
        },
    } = data;

    const phpData = [
        {
            "imageName":"php.png",
            "alt":"Php Logo",
        },
    ];

    return (
        <>
        <Layout>
            <div className="w-full max-w-xl px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
                <div className='max-w-xl mx-auto space-y-6 '>
                    <h1 className="text-center text-3xl">
                       Jaron King
                    </h1>
                        

                    <h2 className="flex flex-row flex-nowrap items-center my-8" >
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span className="flex-none block mx-4 px-4 py-2.5 text-m leading-none font-medium uppercase bg-red-700 text-white"data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-easing="ease-out-back">
                            Resume
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>
<div data-sal="slide-right"
    data-sal-duration="700"
    data-sal-delay="100"
    data-sal-easing="ease-out-back">
    <div className="relative flex flex-row">
        <div className="absolute left-0 text-base">
            Luxer One, Sacramento, CA
        </div>
        <div className="absolute right-0 text-base">
            July ‘17 to September ‘19
        </div>
        <br/>
    </div>
    <div className="text-sm">
        Improved and maintained CakePhp 2 application and integration with dozens of 3rd party applications.<br/>
        CakePhp 2, JavaScript, MySQL, VueJS, Mustache, AWS and Google buckets/ remote storage
    </div>
</div>
<div data-sal="slide-right"
    data-sal-duration="700"
    data-sal-delay="150"
    data-sal-easing="ease-out-back">
    <div className="relative flex flex-row">
        <div className="absolute left-0 text-base">
            Dynamic Vision, Temecula, CA
        </div>
        <div className="absolute right-0 text-base">
            Feb. ’16 to May `17
        </div>
        <br/>
    </div>
    <div className="text-sm">
        Migrated Laravel 2 application to Laravel 4 while also implementing Angular.  Also helped with migrating terabytes of data from MicrosoftSQL to MySQL.<br/>
Laravel 4, NodeJS, Firebase, Angular 2, Bootstrap 3, Git, JIRA, LAMP, MySQL, NOSQL
    </div>
</div>
<div data-sal="slide-right"
    data-sal-duration="700"
    data-sal-delay="200"
    data-sal-easing="ease-out-back">
    <div className="relative flex flex-row">
        <div className="absolute left-0 text-base">
            Freelance, San Diego, CA
        </div>
        <div className="absolute right-0 text-base">
            Mar. ’15 to Feb. ‘16
        </div>
        <br/>
    </div>
    <div className="text-sm">
Projects ranged from CMS blogs to Craigslist like applications, ItsTheGuac, StatEyeConsult, BestOfWebflix<br/>
Symfony 2, Laravel 4, Bootstrap 3, Javascript, Git, LEMP, LAMP.
    </div>
</div>
<div data-sal="slide-right"
    data-sal-duration="700"
    data-sal-delay="250"
    data-sal-easing="ease-out-back">
    <div className="relative flex flex-row">
        <div className="absolute left-0 text-base">
            AP Media, San Diego, CA
        </div>
        <div className="absolute right-0 text-base">
            Mar. ’14 to Mar. ‘15
        </div>
        <br/>
    </div>
    <div className="text-sm">
Facebook advertising platform that would grow to support emails and websites.<br/>
Symfony2, Codeignitor, Git, HTML5, JQuery, Twig, Bootstrap 3, eCommerce, LEMP and LAMP.
    </div>
</div>
<div data-sal="slide-right"
    data-sal-duration="700"
    data-sal-delay="300"
    data-sal-easing="ease-out-back">
    <div className="relative flex flex-row">
        <div className="absolute left-0 text-base">
            Adconion Direct, San Diego, CA
        </div>
        <div className="absolute right-0 text-base">
            Dec. ’12 to Mar. ‘14
        </div>
        <br/>
    </div>
    <div className="text-sm">
Git, Powershell, Email Marketing, Port25 MTA and Creative generation
    </div>
</div>
<div data-sal="slide-right"
    data-sal-duration="700"
    data-sal-delay="350"
    data-sal-easing="ease-out-back">
    <div className="relative flex flex-row">
        <div className="absolute left-0 text-base">
            Regents of the University of California<br/> Davis, CA
        </div>
        <div className="absolute right-0 text-base">
            Sept. ’10 to June ‘12
        </div>
        <br/>
        <br/>
    </div>
    <div className="text-sm">
Created and developed Adobe Captivate courses used for University staff.  Developed and deployed websites based on WordPress CMS, and other PHP web applications.
    </div>
</div>


                     <h2 className="flex flex-row flex-nowrap items-center my-8">
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span 
                            className="flex-none block mx-4 px-4 py-2.5 text-m leading-none font-medium uppercase bg-red-700 text-white" 
                            data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-easing="ease-out-back">
                            Technologies
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>

                    <div className="flex flex-row justify-center"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="2000"
                        data-sal-easing="ease-out-back">
                        <StaticImage 
                            src="../images/php.png"
                            alt="Php Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                        />
                    </div>
                    <div className="not-prose relative bg-light-blue-400 bg-stripes bg-stripes-white rounded-xl overflow-hidden border-light-blue-200 bg-light-blue-200 rounded-md"
                        data-sal="flip-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease-out-back">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                data-sal="slide-up"
                                data-sal-duration="1500"
                                data-sal-delay="300"
                                data-sal-easing="ease-out-back">
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
                                data-sal-duration="1500"
                                data-sal-delay="400"
                                data-sal-easing="ease-out-back">
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
                                data-sal-duration="1500"
                                data-sal-delay="500"
                                data-sal-easing="ease-out-back">
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
                                    data-sal-duration="1500"
                                    data-sal-delay="600"
                                    data-sal-easing="ease-out-back">
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
                                    data-sal-duration="1500"
                                    data-sal-delay="700"
                                    data-sal-easing="ease-out-back">
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

                        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                    </div>

                    <div className="flex flex-row justify-center"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="2000"
                        data-sal-easing="ease-out-back">
                        <StaticImage 
                            src="../images/javascript.png"
                            alt="javascript Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                        />
                    </div>
                    <div className="not-prose relative bg-green-400 bg-stripes bg-stripes-white rounded-xl overflow-hidden"
                        data-sal="flip-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease-out-back">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="400"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="500"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="600"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="700"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="800"
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

                        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                    </div>



                    <div className="flex flex-row justify-center"
                        data-sal="slide-up"
                        data-sal-delay="350"
                        data-sal-duration="2000"
                        data-sal-easing="ease-out-back">
                        <StaticImage
                            src="../images/css.png"
                            alt="CSS Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                        />
                    </div>
                    <div className="not-prose relative bg-yellow-200 bg-stripes bg-stripes-white rounded-xl overflow-hidden"
                        data-sal="flip-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease-out-back">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage
                                        src="../images/bootstrap.png"
                                        alt="Bootstrap Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="400"
                                    data-sal-easing="ease">
                                    <StaticImage
                                        src="../images/tailwind.png"
                                        alt="Tailwind Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="500"
                                    data-sal-easing="ease">
                                    <StaticImage
                                        src="../images/css.png"
                                        alt="CSS Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                    </div>



                    <div className="flex flex-row justify-center"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="2000"
                        data-sal-easing="ease-out-back">
                        <StaticImage 
                            src="../images/ubuntu.png"
                            alt="Ubuntu Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                        />
                    </div>
                    <div className="not-prose relative bg-red-200 bg-stripes bg-stripes-white rounded-xl overflow-hidden"
                        data-sal="flip-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease-out-back">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="400"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="500"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="600"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="700"
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
                                    data-sal-duration="1500"
                                    data-sal-delay="800"
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

                        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                    </div>


                    <div className="flex flex-row justify-center"
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-duration="2000"
                        data-sal-easing="ease-out-back">
                        <StaticImage
                            src="../images/database.png"
                            alt="Database Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                        />
                    </div>
                    <div className="not-prose relative bg-orange-200 bg-stripes bg-stripes-white rounded-xl overflow-hidden"
                        data-sal="flip-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease-out-back">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage
                                        src="../images/mysql.png"
                                        alt="MySQL Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="400"
                                    data-sal-easing="ease">
                                    <StaticImage
                                        src="../images/firebase.png"
                                        alt="Firebase Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={75}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
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
                        <span className="flex-none block mx-4 px-4 py-2.5 leading-none font-medium uppercase bg-red-700 text-white"data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-easing="ease-out-back">
                            Projects
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>
                </div>


                <div>
                    <h2 className="flex flex-row flex-nowrap items-center my-8">
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span className="flex-none block mx-4 px-4 py-2.5 leading-none font-medium uppercase bg-red-700 text-white"data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-easing="ease-out-back">
                            Contact
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
