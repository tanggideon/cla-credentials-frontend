import DashboardCards from "../(components)/Cards";
import Header from "../(components)/Header";
import EventCalendar from "../(components)/calendar";
import Count from "../(components)/Count";
import RequestCharts from "../(components)/requestCharts";

const Dashboard = () => {
  return (
    <div>
      <Header name="Dashboard" />
      <div className="py-4 flex flex-col md:flex-row gap-5">
        <div className="w-full lg:w-2/3">
          <div className="flex gap-4 justify-between">
            <DashboardCards
              label="Universities"
              count={24}
              image="/assets/icons/university.png"
            />
            <DashboardCards
              label="Transcripts"
              count={120023}
              image="/assets/icons/file.png"
            />
            <DashboardCards
              label="Daily Requests"
              count={253}
              image="/assets/icons/graph-bar.png"
            />
          </div>
          <div className="w-full h-[500px] mt-5 rounded-md">
            <RequestCharts />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <h1>Right</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
