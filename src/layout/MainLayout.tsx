import { Outlet } from "react-router";
import Header from "../component/Header";
import Footer from "../component/Footer";


export default function MainLayout() {
    return (
        <div className='flex flex-col h-screen overflow-x-hidden'>
            <Header />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
