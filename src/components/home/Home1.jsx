import GridComponent from "../../customized-components/grid/GridComponent"

const Home1 = () =>
{
    return(
        <div className="container-fluid">
            <GridComponent caption="Employee Table" fields={["Firts Name","Last Name","Salary"]} data={[{'First Name':"Ashish","Last Name":"Shirsat",'Salary':540000.5}]} />
        </div>
    )
}
export default Home1