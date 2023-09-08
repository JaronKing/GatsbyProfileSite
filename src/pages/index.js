import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import TechonologyIcon from "../components/TechnologyIcon"

const Index = ({ data }) => {
    const {
        allDataJson: {
            edges: {
                0: {
                    node: { resume, php, javascript, ubuntu, css, databases }
                }
            }
        }
    } = data;

    console.log(javascript);
    const githubLink = function() {
        window.location.href="https://github.com/JaronKing"
    }

    const linkedinLink = function() {
        window.location.href="https://www.linkedin.com/in/jaron-king-94a00336/"
    }

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        console.log('mount');
    }, []);

    return (
        <>
        <Layout>
            <div className="w-full max-w-xl px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
                <div className='max-w-xl mx-auto space-y-6 '>
                    <h1 className="text-center text-3xl">
                       Jaron J King
                    </h1>
                        
                    <h2 className="flex flex-row flex-nowrap items-center my-8" >
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span className="flex-none block mx-4 px-4 py-2.5 text-m leading-none font-medium uppercase bg-red-700 text-white"data-sal="zoom-in"
                            data-sal-duration="1000"
                            data-sal-easing="ease-out-back">
                            Professional History
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>

                    {
                        resume.map(({date, company, description}, index) => {
                            return (
                                <div
                                    key={ index + "_resume" }
                                    data-sal="slide-right"
                                    data-sal-duration="700"
                                    data-sal-delay={ index * 100 + 100 }
                                    data-sal-easing="ease-out-back">
                                    <div className="relative flex flex-row">
                                        <div className="absolute left-0 text-base" dangerouslySetInnerHTML={{__html: company}}></div>
                                        <div className="absolute right-0 text-base">
                                            { date }
                                        </div>
                                    <br/>
                                    <br/>
                                </div>
                                <div className="text-sm" dangerouslySetInnerHTML={{__html: description}}></div>
                            </div>
                            )
                        })
                    }

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
                                {
                                    php.map((data, index) => {
                                        return (
                                            <TechonologyIcon
                                                key={index  + "_php" }
                                                {...data}
                                                index={index}
                                            />
                                        )
                                    })
                                }
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
                            height={100}
                        />
                    </div>
                    <div className="not-prose relative bg-green-400 bg-stripes bg-stripes-white rounded-xl overflow-hidden"
                        data-sal="flip-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease-out-back">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                {
                                    javascript.map((data, index) => {
                                        return (
                                            <TechonologyIcon
                                                key={index + "_javascript" }
                                                {...data}
                                                index={index}
                                            />
                                        )
                                    })
                                }
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
                            height={100}
                        />
                    </div>
                    <div className="not-prose relative bg-yellow-200 bg-stripes bg-stripes-white rounded-xl overflow-hidden"
                        data-sal="flip-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease-out-back">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage
                                        src="../images/bootstrap.png"
                                        alt="Bootstrap Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        height={60}
                                    />
                                </div>
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="400"
                                    data-sal-easing="ease">
                                    <StaticImage
                                        src="../images/tailwind.png"
                                        alt="Tailwind Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={60}
                                    />
                                </div>
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="500"
                                    data-sal-easing="ease">
                                    <StaticImage
                                        src="../images/css.png"
                                        alt="CSS Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        height={60}
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
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/apache.png"
                                        alt="apache Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={65}
                                    />
                                </div>
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="400"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/nginx.png"
                                        alt="nginx Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={60}
                                    />
                                </div>
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="500"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/jenkins.png"
                                        alt="Jenkins Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={65}
                                    />
                                </div>
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="700"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/elasticbeanstalk.png"
                                        alt="Docker Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={65}
                                    />
                                </div>
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="800"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/s3buckets.png"
                                        alt="Docker Logo"
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
                            src="../images/database.png"
                            alt="Database Logo"
                            placeholder="blurred"
                            layout="fixed"
                            width={70}
                        />
                    </div>
                    <div className="not-prose relative bg-orange-200 bg-stripes bg-stripes-white rounded-xl overflow-hidden"
                        data-sal="flip-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease-out-back">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
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
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="400"
                                    data-sal-easing="ease">
                                    <StaticImage
                                        src="../images/firebase.png"
                                        alt="Firebase Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={60}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div>
                    </div>
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

                <div className="flex justify-center">
                    <div className="px-1">
                        <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-linkedin"
                        onClick={linkedinLink}
                        >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="white"
                        viewBox="0 0 24 24">
                        <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        <span className="text-white">LinkedIn</span>
                        </button>
                    </div>
                    <div className="px-1">
                        <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-github"
                        onClick={githubLink}
                        >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="white"
                        viewBox="0 0 24 24">
                        <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="text-white">Github</span>
                        </button>
                    </div>
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
    allDataJson {
        edges {
            node {
                resume {
                    date
                    company
                    description
                }
                php {
                    title
                    featuredImgUrl
                }
                javascript {
                    title
                    featuredImgUrl
                }
                ubuntu {
                    title
                    featuredImgUrl
                }
                css {
                    title
                    featuredImgUrl
                }
                databases {
                    title
                    featuredImgUrl
                }
            }
        }
    }
}
  `

export default Index
