export default function Experience() {
    return (
        <div>
            <h1 className="text-white text-2xl mb-3"><a className="text-orange-500 text-2xl">*</a> Experience</h1>
            <ol className="relative border-l-2 border-gray-900">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
                    <h3 className="text-white text-md">Software Engineering Intern - Money Tooling</h3>
                    <h4 className="text-gray-500 text-sm">Shopify</h4>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
                    <h3 className="text-white text-md">Software Developer Co-op</h3>
                    <h4 className="text-gray-500 text-sm">Rocket Companies</h4>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
                    <h3 className="text-white text-md">Youtube Analytics Consultant</h3>
                    <h4 className="text-gray-500 text-sm">Self-Employed</h4>
                </li>
            </ol>
        </div>
    );
}