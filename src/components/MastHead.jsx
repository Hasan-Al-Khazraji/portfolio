import QuickLinks from "./QuickLinks";


export default function MastHead() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-white text-2xl">Hasan Al-Khazraji</h1>
                <h2 className="text-gray-500 mb-2 text-xl">Software Engineering Intern</h2>
                <QuickLinks />
            </div>
            <img src="me.jpg" alt="Hasan" className="rounded-full h-16 w-16 sm:h-24 sm:w-24 object-cover mb-2"/>
        </div>
    );
}