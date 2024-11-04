import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar/AdminSidebar'
import Navbar from '../components/header/Navbar'

const MainLayout = () => {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr] overflow-y-hidden '>
        <Navbar/>
        <div className="flex items-start justify-between">
        <div className=" h-full w-15 lg:w-1/6 bg-[#006698] text-white p-1 lg:p-5">
          <AdminSidebar/>
        </div>
        <div className="h-full w-full lg:w-[84%]  ">
          <Outlet/>
        </div>
    </div>

    </div>
  )
}

export default MainLayout
