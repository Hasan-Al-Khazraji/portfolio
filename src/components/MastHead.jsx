import QuickLinks from "./QuickLinks";


export default function MastHead() {
    return (
        <div>
            <img src="me.jpg" alt="Hasan" className="rounded-full h-16 w-16 object-cover mb-2"/>
            <h1 className="text-white text-2xl">Hasan Al-Khazraji</h1>
            <h2 className="text-gray-500 mb-2 text-xl">Software Engineering Intern</h2>
            <QuickLinks />
        </div>
    );
}