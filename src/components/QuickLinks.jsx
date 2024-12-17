import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function QuickLinks() {
    return (
        <div className="flex">
            <a href="https://github.com/Hasan-Al-Khazraji" target='_blank'>
                <GitHubIcon className='text-white scale-125 m-2 ml-1 hover:cursor-pointer'/>
            </a>
            <a href="https://www.linkedin.com/in/hasan-al-khazraji/" target='_blank'>
                <LinkedInIcon className='text-white scale-125 m-2 hover:cursor-pointer'/>
            </a>
            <a href="mailto:hasanwatheq2014@gmail.com" target='_blank'>
                <EmailIcon className='text-white scale-125 m-2 hover:cursor-pointer'/>
            </a>
        </div>
    );
}