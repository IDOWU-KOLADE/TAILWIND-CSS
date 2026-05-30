import {Navbar} from './COMPONENTS/HERO COMPONENTS/Navbar';
import {PropertyViews} from './COMPONENTS/HERO COMPONENTS/Propertyviews';
import {StatsGrid}  from './COMPONENTS/HERO COMPONENTS/Statsgrid';
import { TasksCard } from './COMPONENTS/CONTDHERO+COMPONENTS/Taskcard';
import { RecentProperties } from './COMPONENTS/CONTDHERO+COMPONENTS/RecentProperties';
import { RecentActivity } from './COMPONENTS/CONTDHERO+COMPONENTS/RecentActivity';
import { RecentLeads } from './COMPONENTS/CONTDHERO+COMPONENTS/RecentLeads';
import { AIAssistant } from './COMPONENTS/CONTDHERO+COMPONENTS/AIAssistant';
import { BottomNav } from './COMPONENTS/CONTDHERO+COMPONENTS/BottomNav';
import { Sidebar } from './COMPONENTS/CONTDHERO+COMPONENTS/Sidebar';
import { Header } from './COMPONENTS/HERO COMPONENTS/Header';
export default function Home() {
return (
  <> 
  <div className='min-h-screen'>
      <Sidebar/>
      <div  className="md:ml-16 lg:ml-64 transition-all duration-300">
      <Navbar/>
      <Greeting/>
      <StatsGrid/>
      <PropertyViews/>
      <RecentProperties/>
      <div className="grid grid-cols-1 md:grid-cols-2  px-4 mt-4 mb-2">
      <TasksCard/>
      <RecentActivity/>
</div>

{/* side by side on desktop, stacked on mobile */}
<div className="grid grid-cols-1 md:grid-cols-2 px-4 mb-3">
  <RecentLeads/>
  <AIAssistant/>
</div>
      <BottomNav/>
    </div>
  </div>

  </>


)
}

function Greeting() {
  return (
    <>
      {/* mobile greeting */}
      <div className="md:hidden flex flex-col gap-1 px-4 pt-4">
        <h1 className="text-gray-900 text-xl font-semibold">Good morning, John 👋</h1>
        <p className="text-gray-500 text-sm">Here's what's happening with your properties today.</p>
      </div>

      {/* desktop header */}
<div className="hidden md:flex flex-col px-6 pt-4 pb-2">

  {/* top row — notifications right aligned */}
  <div className="flex justify-end items-center gap-4 mb-3">
    <button className="relative text-gray-600 hover:text-gray-900">
      <span className="text-xl">🔔</span>
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full" />
    </button>
    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500">
      <img
        src="https://i.pravatar.cc/32"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    <button className="text-gray-600 text-xs">▾</button>
  </div>

  {/* bottom row — greeting left aligned */}
  <div>
    <h1 className="text-gray-900 font-semibold text-xl">Good morning, John 👋</h1>
    <p className="text-gray-400 text-sm mt-0.5">Here's what's happening with your properties today.</p>
  </div>

</div>    </>
  )
}


