import type { PPT_Projects } from "../types/PortfolioPageTypes";
import PP_AchievementCards from "./PP_AchievementCards";

import ctc from '../../assets/projects/ctc.png'
import marriage from '../../assets/projects/marriage.png'
import octc from '../../assets/projects/octc.png'
import queu from '../../assets/projects/queu.png'

const ListAchievements : PPT_Projects[] = [
    {
        Photo : ctc,
        Title : "LCR System",
        Description : "The LCR Certification System automates the issuance of civil registry documents by integrating both old and new databases. Users can easily search, verify, and print Certified True Copies of Birth, Death, and Marriage records, as well as certifications of No Record or Destroyed. This system speeds up processing and enhances efficiency in the Local Civil Registry Office.",
    },
     {
        Photo : marriage,
        Title : "Marriage System",
        Description : "The Marriage System streamlines the entire marriage application process—from filing and posting to certification. It maintains digital logs for transparency and easy tracking, allowing faster and more organized management of marriage records and applications within the Local Civil Registry Office.",
    },
     {
        Photo : queu,
        Title : "Queuing System",
        Description : "The Queuing System manages and monitors client flow in real time. It records client details upon registration, assigns queue numbers, and tracks transactions per service table. Integrated with TV display and YouTube live viewing, it allows clients to conveniently monitor their queue numbers while waiting, ensuring an organized and efficient service experience in the office.",
    },
     {
        Photo : octc,
        Title : "LCR Web System",
        Description : "The LCR Web System provides quick and convenient access to the civil registry database through a web-based platform. It integrates both old and new records into a unified system, allowing users to easily query and retrieve information online for faster and more efficient data verification. \n Currently Offline due to Department Head's request",
    },
    
]

export default function PortfolioPage() {
  const fileId = "1u4oxQ_lRckuCkqWiN4lSPn7NIiJ1Zzai";
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="flex flex-col max-w-[800px] mx-auto">
        <div className="flex flex-col p-2 md:p-10 ">
            <p className="text-center text-2xl">Personal Date Sheet</p>
            <p className="text-center text-xl italic mb-5">To Access Request Me</p>
            <div className="overflow-auto">
                <div style={{ width: "100%", height: "75vh", display: "flex", justifyContent: "center" }}>
                <iframe
                    src={previewUrl}
                    width="80%"
                    height="600px"
                    allow="autoplay"
                    title="Embedded PDF from Drive"
                    style={{ border: "none" }}
                    />
                </div>
            </div>
        </div>
        <div className="px-2 py-5">
            <p className="text-center text-2xl md:font-bold">My Projects</p>
            <p className="mb-5 text-center">List of the Projects completed and being properly integrated in the office</p>
            <div className="grid grid-cols-1 items-center gap-2 md:gap-5 justify-center">
                {ListAchievements.map((d,i) => (
                    <PP_AchievementCards key={i} data ={d}/>
                ))}
            </div>
        </div>
    </div>
  );
}
