import { Ellipsis } from "lucide-react";
import Image from "next/image";

interface CardProps {
  label: string;
  count: number;
  image: string;

}

const DashboardCards: React.FC<CardProps> = ({label, count, image}) => {
  return (
    <div className="rounded-2xl shadow-md odd:bg-green-300 even:bg-blue-300 p-4 flex-1 min-w-{200px}">
      <div className="flex justify-between items-center">
        <Image src={image} alt="university" width={30} height={30}/>
        <Ellipsis className="w-6 h-6 text-white rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500"/>
      </div>
      <h2 className="text-2xl font-semibold my-4">{count}</h2>
      <h2 className="capitalize text-lg font-extrabold text-gray-500"></h2>
      {label}</div>
  )
}

export default DashboardCards