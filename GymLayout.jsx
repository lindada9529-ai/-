import { Outlet } from 'react-router-dom';
import GymNavbar from './GymNavbar';
import GymFooter from './GymFooter';

export default function GymLayout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <GymNavbar />
      <main>
        <Outlet />
      </main>
      <GymFooter />
    </div>
  );
}
