import { CgMoreO } from "react-icons/cg";

function AccountSwitchTab() {
    return <div className="flex justify-around items-center w-[70%] hover:cursor-pointer hover:bg-gray-900 rounded-lg">
        <div className="bg-blue-600 rounded-full w-12 h-12 flex justify-center items-center">M</div>
        <div>
            <h1>m123</h1>
            <p>@Malingaraypj</p>
        </div>
        <CgMoreO color="white" size={30}/>
    </div>
}

export default AccountSwitchTab;