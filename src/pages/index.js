import React from "react" 
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const Index = ({ data }) => {
    const {
        site: {
            siteMetadata: { name, role },
        },
        allDataJson: {
            edges: {
                0: {
                    node: { resume }
                }
            }
        }
    } = data;

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

                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                data-sal="slide-up"
                                data-sal-duration="1500"
                                data-sal-delay="300"
                                data-sal-easing="ease-out-back">
                                    <StaticImage 
                                        src="../images/symfony.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>

                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
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
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                data-sal="slide-up"
                                data-sal-duration="1500"
                                data-sal-delay="500"
                                data-sal-easing="ease-out-back">
                                    <StaticImage 
                                        src="../images/codeignitor.png"
                                        alt="Php Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={60}
                                    />
                                </div>
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
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
                                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-lg bg-white"
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
                            height={100}
                        />
                    </div>
                    <div className="not-prose relative bg-green-400 bg-stripes bg-stripes-white rounded-xl overflow-hidden"
                        data-sal="flip-down"
                        data-sal-duration="1000"
                        data-sal-easing="ease-out-back">
                        <div className="relative rounded-xl overflow-auto p-8">
                            <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 rounded-lg">
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/angular.png"
                                        alt="angular Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={70}
                                    />
                                </div>
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="400"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/reactjs.png"
                                        alt="reactjs Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={55}
                                    />
                                </div>
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="500"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/nodejs.png"
                                        alt="NodeJs Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="600"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/redux.png"
                                        alt="Redux Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={60}
                                    />
                                </div>
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="700"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/gatsby.png"
                                        alt="gatsby Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={50}
                                    />
                                </div>
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="800"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/vuejs.png"
                                        alt="VueJs Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={60}
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
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/apache.png"
                                        alt="apache Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={55}
                                    />
                                </div>
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
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
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
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
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="600"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/docker.png"
                                        alt="Docker Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={65}
                                    />
                                </div>
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
                                    data-sal="slide-up"
                                    data-sal-duration="1500"
                                    data-sal-delay="700"
                                    data-sal-easing="ease">
                                    <StaticImage 
                                        src="../images/elasticbeanstalk.png"
                                        alt="Docker Logo"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={55}
                                    />
                                </div>
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-lg bg-white"
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
            }
        }
    }
}
  `

export default Index
