import IdeaPhoto from '../../assets/Idea.png'
import type { AboutPageType_Cards } from '../types/AboutPageTypes'
import AdminImg from '../../assets/services/Admin.png'
import BloggingIcon from '../../assets/services/Blogging.png'
import ProgrammingIcon from '../../assets/services/Programming.png'
import AP_Card from '../about/AP_Card'

import VirtualAssistantIcon from '../../assets/services/virtualassistant.png'
import EncoderIcon from '../../assets/services/dataencoder.png'
import SchedulerIcon from '../../assets/services/scheduler.png'
import CustomerServiceIcon from '../../assets/services/customersupport.png'
import ResearchIcon from '../../assets/services/research.png'
import VideoEditorIcon from '../../assets/services/videoeditor.png'
import PhotoEditorIcon from '../../assets/services/photoeditor.png'
import SocialMediaIcon from '../../assets/services/socialmediamanager.png'
import ITSupportIcon from '../../assets/services/itsupport.png'
import CyberSecurityIcon from '../../assets/services/cybersecurity.png'
import NASIcon from '../../assets/services/nas.png'




const ListCards : AboutPageType_Cards [] = [
{
  Img: AdminImg,
  Title: "Administrative Task",
  Description: "Provide professional administrative support, managing documents, schedules, correspondence, and workflows to ensure smooth operations.",
},
{
  Img: ProgrammingIcon,
  Title: "Programmer",
  Description: "Develop full-stack web and desktop applications, handling programming, databases, and system integration for efficient solutions.",
},
{
  Img: BloggingIcon,
  Title: "Blogging",
  Description: "Manage blogs and create engaging content using skills in photo and video editing, ensuring visually appealing posts that attract audiences.",
},
{
  Img: VirtualAssistantIcon,
  Title: "Virtual Assistant",
  Description: "Provide remote support by handling emails, scheduling, research, and routine administrative tasks efficiently.",
},
{
  Img: EncoderIcon,
  Title: "Data Encoder",
  Description: "Accurately input and maintain data in systems or spreadsheets, ensuring data integrity and timely updates.",
},
{
  Img: SchedulerIcon,
  Title: "Scheduler",
  Description: "Organize and maintain appointments, meetings, and events, ensuring seamless coordination across teams and clients.",
},
{
  Img: CustomerServiceIcon,
  Title: "Customer Service",
  Description: "Assist clients or customers by addressing inquiries, resolving issues, and providing helpful guidance.",
},
{
  Img: VideoEditorIcon,
  Title: "Video Editor",
  Description: "Edit and enhance videos for social media, presentations, or content creation, ensuring high-quality and engaging output.",
},
{
  Img: PhotoEditorIcon,
  Title: "Photo Editor",
  Description: "Enhance and retouch photos for digital content, publications, or social media campaigns with professional results.",
},
{
  Img: SocialMediaIcon,
  Title: "Social Media Manager",
  Description: "Manage Facebook, TikTok, and other social platforms, creating and scheduling content to grow audience engagement and visibility.",
},
{
  Img: ITSupportIcon,
  Title: "IT Support",
  Description: "Provide technical assistance, troubleshoot hardware/software issues, and maintain computer systems for smooth operations.",
},
{
  Img: CyberSecurityIcon,
  Title: "Cybersecurity",
  Description: "Implement security measures to protect networks, systems, and data from unauthorized access, threats, and vulnerabilities.",
},
{
  Img: NASIcon,
  Title: "NAS Management",
  Description: "Manage Network Attached Storage (NAS) devices, organizing data, setting permissions, and ensuring secure and efficient storage solutions.",
},
{
  Img: ResearchIcon,
  Title: "Research & Documentation",
  Description: "Conduct research, gather information, and prepare accurate reports or documentation to support projects and decisions.",
}

]

export default function ServicePage() {
  return (
    <div className='p-10 flex flex-col'>
      {/* Introduction */}
        <div className='flex flex-col md:flex-row items-center gap-2 p-10'>
            <div className='md:w-1/2'>
            <img className='lg:h-[800px]' src={IdeaPhoto} alt="Thinking Solution" />
            </div>
            <div className='flex flex-col md:w-1/2 items-center gap-2'>
            <p className='lg:text-5xl lg:mb-5 text-2xl font-bold'>Problems?</p>
            <p className='lg:text-xl font-bold text-center'>Manual, Time-Consuming Tasks and Disorganized Data</p>
            <p className='lg:text-xl text-center'>If your team is manually handling tasks, entering data individually, and struggling to organize information, I can create custom solutions for you. I specialize in developing web applications, desktop software, and mobile apps that automate these processes, improve data organization, and reduce errors. This allows your operations to run efficiently without relying on repetitive manual work.</p>
            <p className='lg:text-xl text-center'>If the challenge is a lack of skilled encoders, clerks, or secretaries, I can also fill that gap. I can handle data entry, organize information, and implement the system myself, ensuring that your workflow continues smoothly even with limited personnel.</p>
            </div>
        </div>

        {/* Service */}
        <div className='lg:px-40 lg:justify-center lg:gap-10  md:justify-between flex flex-col gap-2 p-10'>
            <div className='md:flex-row md:justify-center md:gap-5 flex mb-5 flex-col items-center'>
                <p className='font-bold text-2xl'>Services 
                <span className='text-yellow-600 font-bold'> I Provide</span></p>
            </div>
            <div className="flex gap-2 flex-row justify-center">
                <span className='mx-auto md:block hidden'></span>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-2  md:1/2 md:gap-5'>
                  {ListCards.map((d, i) => (
                      <AP_Card key={i} data={d} />
                  ))}
                </div>
                <span className='mx-auto md:block hidden'></span>
            </div>
            <span className='hidden md:block'></span>
        </div>
    </div>
  )
}
