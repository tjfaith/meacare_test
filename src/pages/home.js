import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Efficiency from "./subPage/efficiency"
const Home = () => {
    return (
      <main class="flex">
      <div class="flex flex-col justify-between w-64 h-screen">
        <Sidebar/>
      </div>
      <div class="flex flex-col  w-full">
       <Header/>
       <Efficiency/>
        {/* <footer class="mt-auto bg-pink-300 py-4">
          Content Footer
        </footer> */}
      </div>
    </main>
    )
}
 
export default Home;
// flex flex-col justify-between w-full