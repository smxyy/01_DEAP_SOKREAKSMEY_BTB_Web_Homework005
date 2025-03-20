import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '../../components/ui/appsidebar';
import InputSearch from "@/components/input/input-search";

export default function RootLayout({children}){
  return (
      <>
        <SidebarProvider>
          <AppSidebar/>
          
        <section className="bg-gray-100 w-full py-8 px-14 h-screen">

                <div className="flex flex-col gap-5 h-full">
                  <InputSearch />
                  <div className="w-full h-[90%] bg-white rounded-[2.5rem] p-8">
                    {children}
                  </div>
                </div>
        {/* <SidebarTrigger/> */}
        {/* {children} */}
        </section>
        </SidebarProvider>
      </>
  );
}