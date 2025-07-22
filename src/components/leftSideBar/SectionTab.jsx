import {
    IoHomeSharp, IoSearchSharp , IoNotificationsSharp,
    IoChatbubblesSharp, IoPeopleSharp, IoSettingsSharp,
} from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";

function SectionTab({handleSection}) {

    const options = {
        home: {
            icon: <IoHomeSharp color="white" size={30}/>,
            label: 'Home',
        },
        explore: {
            icon: <IoSearchSharp  color="white" size={30}/>,
            label: 'Explore',
        },
        notification: {
            icon: <IoNotificationsSharp color="white" size={30} />,
            label: 'Notification',
        },
        messages: {
            icon: <IoChatbubblesSharp color="white" size={30}/>,  
            label: 'Messages',
        },
        communities: {
            icon: <IoPeopleSharp color="white" size={30}/>,   
            label: 'Communities',
        },
        profile: {
            icon: <IoSettingsSharp color="white" size={30}/>,
            label: 'Profile',
        },
        more: {
            icon: <CgMoreO color="white" size={30}/>,
            label: 'More',
        },
    }
    return <div className="w-full flex flex-col gap-10 justify-center items-center">
        <ul className="flex flex-col gap-5 w-[40%]">
            {Object.keys(options).map((key) => (
                <li onClick={()=> handleSection(key)} key={key} className="flex items-center gap-4 hover:bg-gray-900 rounded-full cursor-pointer">
                    {options[key].icon}
                    <span className="text-xl">{options[key].label}</span>
                </li>
            ))}
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 text-white hover:cursor-pointer font-bold rounded-full w-[80%] text-lg transition-colors h-12">Post</button>
    </div>
}

export default SectionTab;