import DashboardCards from "../(components)/Cards";
import Header from "../(components)/Header";
import EventCalendar from "../(components)/calendar";
import Count from "../(components)/Count";
import RequestCharts from "../(components)/requestCharts";
import TranscriptCard from "../(components)/completedTranscriptCards";

const Dashboard = () => {
  return (
    <div >
      <Header name="Dashboard" />
      <div className="py-4 flex flex-col md:flex-row gap-5">
        <div className="w-full lg:w-2/3">
          <div className="flex gap-4 justify-between">
          <TranscriptCard name="Alice Johnson" university="Stanford University" dob="19th January, 2001"/>
          <TranscriptCard name="Kaburi Edward" university="University of Michigan" dob="29th May, 1998"/>
          <TranscriptCard name="Sophia Maddison" university="Bradford University" dob="19th April, 1999"/>
          <TranscriptCard name="Sophia Maddison" university="Bradford University" dob="19th April, 1999"/>
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
