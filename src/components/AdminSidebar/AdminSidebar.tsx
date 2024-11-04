import { CgMenuGridR } from 'react-icons/cg';
import { TbReportSearch } from "react-icons/tb";
import { GoCommentDiscussion } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <>
      <NavLink className={({ isActive }) =>
          `flex items-center text-lg lg:text-2xl font-semibold
          ${isActive ? " border-yellow-200 text-yellow-200" : " hover:border-yellow-200 hover:text-yellow-200"}
          `
        }
        to="/">
        <CgMenuGridR className="text-3xl me-1" />
        <span className="hidden lg:block">النتائج</span>
      </NavLink>
      <ul className="mt-10 flex items-center justify-center flex-col lg:items-start">
        <NavLink className={({isActive})=>
        `flex items-center text-xl mb-5 lg:border-b border-gray-300  transition
        ${isActive ? " border-yellow-200 text-yellow-200" : " hover:border-yellow-200 hover:text-yellow-200"}
        `} to="/discuss">
          <GoCommentDiscussion className="me-1" />
          <span className="hidden lg:block">مناقشة النتائج</span>
        </NavLink>
        <NavLink className={({isActive})=>
        `flex items-center text-xl mb-5 lg:border-b border-gray-300  transition
        ${isActive ? " border-yellow-200 text-yellow-200" : " hover:border-yellow-200 hover:text-yellow-200"}
        `}
        to="/conclusion">
        <TbReportSearch className="me-1" />
        <span className="hidden lg:block">الاستنتاج</span>
        </NavLink>
      </ul>
    </>
  )
}

export default AdminSidebar;