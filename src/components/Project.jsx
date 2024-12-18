import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Project({projectName, redirect, description, techStack}) {
    return (
        <div className='text-white'>
            <div className='align-middle'>
                <a href={redirect} target='_blank'>
                    <span className='hover:bg-slate-800 hover:cursor-pointer hover:scale-105 flex space-x-2 p-1 transition w-fit pl-0 pb-0'>
                        <ArrowForwardIosIcon></ArrowForwardIosIcon>
                        <h2 className='text-lg'>{projectName}</h2>
                    </span>
                </a>
                <h4 className='text-md text-gray-500'>{description}</h4>
                <p className='text-gray-300 text-sm'>Tech Stack: {techStack}</p>
            </div>
        </div>
    );
}