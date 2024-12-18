import Experience from './Experience';
import Projects from './Projects';

export default function About() {
    return (
        <div>
            <h2 className="text-gray-500 text-xl mb-8">Hi! I'm Hasan, a Computer Engineering Student. I love building things and solving problems.</h2>
            <Experience />
            <Projects />
        </div>
    );
}