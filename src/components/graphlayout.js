import GraphComponent from "../components/graph";


const Graph = () => {
  return (
    <div className="flex  border rounded-xl  justify-between mx-8 divide-x mb-4">
        <div className='grow'>
      <div className="flex font-semibold text-sm items-center justify-between grow m-5">
        <div className="flex flex-row items-center">
          <h4>Average response Time</h4>
          <span className="ml-5 text-green-500 bg-green-100 rounded-md p-1 text-sm ">
            +4.14%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center mr-1">
            <div className="ml-5 bg-red h-2 w-px w-2"> &nbsp; </div>
            <span className="ml-2">High Priority</span>
          </div>
          <div className="border-r-2">&nbsp;</div>
          <input
            type="date"
            placeholder="This Month"
            className="border rounded-md ml-2 p-1"
          />
        </div>
      </div>
         {/* graph goes here */}
         <GraphComponent/>
      </div>
      <div>
        <div className="bg-lightergray border px-5 w-48 h-32 py-7 rounded-md flex m-5 flex-wrap items-center ">
          <small className="text-xs text-gray-500">Average Response Time</small>
          <h3 className="font-semibold">30 Mins</h3>
        </div>
        <div className="bg-lightergray border px-5 w-48 h-32 py-7 rounded-md flex m-5 flex-wrap items-center ">
          <small className="text-xs text-gray-500">Response Time</small>
          <h3 className="font-semibold">1 Hour 30 Mins</h3>
        </div>
      </div>
    </div>
  );
};

export default Graph;
