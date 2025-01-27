import { DataGrid } from "@mui/x-data-grid"
import Header from "../(components)/Header"
import { mockDataNotification } from "../../constants/mockData"


const Transcripts = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID"
    },
    {
      field: "requestType",
      headerName: "Student Name",
      flex: 1
    },
    {
      field: "university",
      headerName: "University",
      flex: 1
    },
    {
      field: "dateTime",
      headerName: "Date Time",
      flex: 1
    },
    {
      field: "requestResponse",
      headerName: "Response",

    },
    
  ]
    return (
      <div className="">
        <Header name="Transcripts"/>
        <hr />
              <div className="w-full h-full mt-3">
                <DataGrid rows={mockDataNotification} columns={columns}/>
              </div>
      </div>
    )
  }
  
  export default Transcripts