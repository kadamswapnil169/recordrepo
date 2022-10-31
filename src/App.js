import { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios.js";


const App = () => {
  const [myData, setMyData] = useState([]);
 
  
  const [recordData,setrecordData] = useState({
    id:'',
    name:'',
    username:'',
    email:'',
    website:'',
    phone:''
    
  })
 

  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      
      .then((res) => setMyData(res.data))
      
  }, []);

  const viewDetail = (id) =>
    {
      axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      
      .then((response) => setrecordData(response.data))
      
      
    }
    
   
        
   

  return (
    <>
       <div class="container mt-2">
        <div class="row mt-2 ">
            <div class="col-lg-1 col-md-6 col-sm-12">
            </div>  
            <div class="col-lg-11 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               <h2>records</h2>
              </h5>
                <div class=" mt-5">
                    <table class="table table-striped table-sm">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>view Details</th>
                            </tr>
                        </thead>
                        <tbody>
                       
                          {myData.map((names,id)=>
                           <tr key={id}>
                               <td>{names.id}</td>
                              <td>{names.name}</td>
                              <td>{names.username}</td>
                              <td>{names.email}</td>
                              <td>{names.website}</td>
                              
                              <td><button class="btn btn-primary" onClick={(e)=>viewDetail(names.id)} data-toggle="modal" data-target="#myModal">view Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>


{/* 
 bootstrap modal table */}

      <div class="modal" id="myModal">
        <div class="modal-dialog" style={{width:"800px"}}>
          <div class="modal-content">
            <div class="modal-header">
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <div class="modal-body">
            <table class="table table-striped table-sm">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>phone</th>
                               </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>{recordData.id}</td>
                              <td>{recordData.name}</td>
                              <td>{recordData.username}</td>
                              <td>{recordData.email}</td>
                              <td>{recordData.website}</td>
                              <td>{recordData.phone}</td>
                             </tr>
                         
                        </tbody>
                    </table>
            </div>
            
            
           
            
          </div>
        </div>
      </div>

    </div>
 
    

    </>
  );
};

export default App;