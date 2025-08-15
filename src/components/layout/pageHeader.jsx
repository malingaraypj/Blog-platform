import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

function PageHeader({ title, subtitle }) {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 left-0 z-10 w-[97%] h-15 bg-black flex items-center justify-between pr-5 shadow-md">
      <div className="flex items-center p-2 text-white gap-5">
        <IoMdArrowRoundBack
          onClick={() => {
            navigate(-1);
          }}
          size={20}
          className="cursor-pointer"
        />
        <div>
          {title && <h1 className="font-bold">{title}</h1>}
          {subtitle && <p className="text-sm">{`${subtitle} posts`}</p>}
        </div>
      </div>
      <IoSearchOutline />
    </div>
  );
}

export default PageHeader;
