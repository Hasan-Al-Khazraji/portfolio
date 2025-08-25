export default function Experience() {
    return (
        <div>
            <h1 className="text-white text-2xl mb-3"><a className="text-orange-500 text-2xl">*</a> Experience</h1>
            <ol className="relative border-l-2 border-gray-900">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-6 -start-1.5 border border-gray-900"></div>
                    <div className="flex items-center gap-2 group">
                        <img src="Tesla.png" alt="Tesla" className='w-[56px] filter contrast-120 saturate-150 transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:translate-x-1' />
                        <div>
                            <h3 className="text-white text-md translate-x-1 group-hover:translate-x-3 transition-all duration-300">Software Engineering Intern</h3>
                            <h4 className="text-gray-500 text-sm translate-x-1 group-hover:translate-x-3 transition-all duration-300">Tesla - Integration Platform Vehicle Firmware</h4> 
                            <h5 className="text-gray-500 text-xs translate-x-1 group-hover:translate-x-3 transition-all duration-300">Golang, Python, TypeScript</h5>
                        </div>
                    </div>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-6 -start-1.5 border border-gray-900"></div>
                    <div className="flex items-center gap-2 group">
                        <img src="Shop.png" alt="Shopify" className='w-[56px] filter contrast-120 saturate-150 transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:translate-x-1' />
                        <div>
                            <h3 className="text-white text-md translate-x-1 group-hover:translate-x-3 transition-all duration-300">Software Engineering Intern</h3>
                            <h4 className="text-gray-500 text-sm translate-x-1 group-hover:translate-x-3 transition-all duration-300">Shopify - Payments KYC and Remediation</h4> 
                            <h5 className="text-gray-500 text-xs translate-x-1 group-hover:translate-x-3 transition-all duration-300">Ruby on Rails, GraphQL, MySQL, GCP, TypeScript</h5>
                        </div>
                    </div>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-6 -start-1.5 border border-gray-900"></div>
                    <div className="flex items-center gap-2 group">
                        <img src="Rocket.png" alt="Rocket" className='w-[56px] filter contrast-120 saturate-150 transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:translate-x-1' />
                        <div>
                            <h3 className="text-white text-md translate-x-1 group-hover:translate-x-3 transition-all duration-300">Software Developer Co-op</h3>
                            <h4 className="text-gray-500 text-sm translate-x-1 group-hover:translate-x-3 transition-all duration-300">Rocket Companies</h4>
                            <h5 className="text-gray-500 text-xs translate-x-1 group-hover:translate-x-3 transition-all duration-300">React, TypeScript, NestJS, AWS, Cypress.io</h5>
                        </div>
                    </div>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-6 -start-1.5 border border-gray-900"></div>
                    <div className="flex items-center gap-2 group">
                        <img src="GDSC.png" alt="GDSC" className='w-[56px] filter contrast-120 saturate-150 transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:translate-x-1' />
                        <div>
                            <h3 className="text-white text-md translate-x-1 group-hover:translate-x-3 transition-all duration-300">Technical Director</h3>
                            <h4 className="text-gray-500 text-sm translate-x-1 group-hover:translate-x-3 transition-all duration-300">Google Developer Student Club</h4>
                            <h5 className="text-gray-500 text-xs translate-x-1 group-hover:translate-x-3 transition-all duration-300">Golang, React, Python,TypeScript</h5>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    );
}