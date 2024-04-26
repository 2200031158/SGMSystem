// FacultyList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyList = () => {
  // State to store the list of faculty
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make a GET request to your backend API endpoint
      const response = await axios.get('/api/faculty');
      // Update the facultyList state with the data received
      setFacultyList(response.data);
    } catch (error) {
      console.error('Error fetching faculty list:', error);
    }
  };

  return (
    <div>
    <center> <p className="text-5xl">FacultyList</p></center>

<table id="myTable">
<thead>
<tr className="header">
 
   <th scope="col">S.no</th>
   <th scope="col">Subject</th>
   <th scope="col">Faculty Name</th>
  
 </tr>
</thead>
<tbody className="table-group-divider">
 <tr>
   <th scope="row">1</th>
   <td>Design Analysis of Algorithm</td>
   <td>Tata Ravi</td>

   <td>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
Select
</button>
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header">
     <h1 class="modal-title fs-5 mx-16" id="exampleModalLabel">Design Analysis and Algorithm</h1>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body">
     <h1>Syllabus:</h1>
     <p>Basics: Operating System Functionalities, Types of Operating Systems, Process Virtualization: Processes, Process API code, Direct Execution, CPU Scheduling, Multi-level Feedback, Lottery Scheduling code, Multiprocessor Scheduling. Memory Virtualization: Address Spaces, Memory API, Address Translation, Segmentation, Free Space Management, Introduction to Paging, Translation Look Aside Buffer, Swapping, Demand Paging, Thrashing, Page replacement algorithms, CPU Virtualization Basics. Concurrency: Concurrency and Threads code, Thread API, Common concurrency problems, Locks, Locked Data Structures, Condition Variables, Mutex, Semaphores, Monitors. Deadlock: Prevention, Detection and Avoidance. Persistence: I/O Devices, Hard Disk Drives, Redundant Disk Arrays (RAID), Files and Directories, File System Implementation, Distributed systems, Inter-process Communication, Data Integrity and Protection.</p>
   </div>
   <div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   </div>
 </div>
</div>
</div>
   </td>
 </tr>
 <tr>
   <th scope="row">2</th>
   <td>MERN Full stack Development</td>
   <td>Dr.Verraju</td>
   <td>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
Select
</button>
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header">
     <h1 class="modal-title fs-5 mx-40" id="exampleModalLabel">MERN stack</h1>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body">
     <h1>Syllabus:</h1>
     <p>Basics: Operating System Functionalities, Types of Operating Systems, Process Virtualization: Processes, Process API code, Direct Execution, CPU Scheduling, Multi-level Feedback, Lottery Scheduling code, Multiprocessor Scheduling. Memory Virtualization: Address Spaces, Memory API, Address Translation, Segmentation, Free Space Management, Introduction to Paging, Translation Look Aside Buffer, Swapping, Demand Paging, Thrashing, Page replacement algorithms, CPU Virtualization Basics. Concurrency: Concurrency and Threads code, Thread API, Common concurrency problems, Locks, Locked Data Structures, Condition Variables, Mutex, Semaphores, Monitors. Deadlock: Prevention, Detection and Avoidance. Persistence: I/O Devices, Hard Disk Drives, Redundant Disk Arrays (RAID), Files and Directories, File System Implementation, Distributed systems, Inter-process Communication, Data Integrity and Protection.</p>
   </div>
   <div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   </div>
 </div>
</div>
</div>
   </td>
 </tr>
 <tr>
 <th scope="row">3</th>
 <td>Python Full stack development</td>
 <td>Dr.K.Samuel</td>
 <td>

 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
Select
</button>
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header">
     <h1 class="modal-title fs-5  mx-32" id="exampleModalLabel">Python Full Stack</h1>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body">
     <h1>Syllabus:</h1>
     <p>Basics: Operating System Functionalities, Types of Operating Systems, Process Virtualization: Processes, Process API code, Direct Execution, CPU Scheduling, Multi-level Feedback, Lottery Scheduling code, Multiprocessor Scheduling. Memory Virtualization: Address Spaces, Memory API, Address Translation, Segmentation, Free Space Management, Introduction to Paging, Translation Look Aside Buffer, Swapping, Demand Paging, Thrashing, Page replacement algorithms, CPU Virtualization Basics. Concurrency: Concurrency and Threads code, Thread API, Common concurrency problems, Locks, Locked Data Structures, Condition Variables, Mutex, Semaphores, Monitors. Deadlock: Prevention, Detection and Avoidance. Persistence: I/O Devices, Hard Disk Drives, Redundant Disk Arrays (RAID), Files and Directories, File System Implementation, Distributed systems, Inter-process Communication, Data Integrity and Protection.</p>
   </div>
   <div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   </div>
 </div>
</div>
</div>
 </td>
</tr>
<tr>
<th scope="row">4</th>
<td>Automata Theory</td>
<td>Dr.V.Sanjay Saho</td>
<td>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4">
Select
</button>
<div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header">
     <h1 class="modal-title fs-5 mx-32" id="exampleModalLabel">Automata Theory</h1>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body">
     <h1>Syllabus:</h1>
     <p>Basics: Operating System Functionalities, Types of Operating Systems, Process Virtualization: Processes, Process API code, Direct Execution, CPU Scheduling, Multi-level Feedback, Lottery Scheduling code, Multiprocessor Scheduling. Memory Virtualization: Address Spaces, Memory API, Address Translation, Segmentation, Free Space Management, Introduction to Paging, Translation Look Aside Buffer, Swapping, Demand Paging, Thrashing, Page replacement algorithms, CPU Virtualization Basics. Concurrency: Concurrency and Threads code, Thread API, Common concurrency problems, Locks, Locked Data Structures, Condition Variables, Mutex, Semaphores, Monitors. Deadlock: Prevention, Detection and Avoidance. Persistence: I/O Devices, Hard Disk Drives, Redundant Disk Arrays (RAID), Files and Directories, File System Implementation, Distributed systems, Inter-process Communication, Data Integrity and Protection.</p>
   </div>
   <div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   </div>
 </div>
</div>
</div>
</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Operating Systems</td>
<td>Dr.K.SeethaRamaRaju</td>
<td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal5">
Select
</button>
<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header">
     <h1 class="modal-title fs-5 mx-32" id="exampleModalLabel">Operating System</h1>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div class="modal-body">
     <h1>Syllabus:</h1>
     <p>Basics: Operating System Functionalities, Types of Operating Systems, Process Virtualization: Processes, Process API code, Direct Execution, CPU Scheduling, Multi-level Feedback, Lottery Scheduling code, Multiprocessor Scheduling. Memory Virtualization: Address Spaces, Memory API, Address Translation, Segmentation, Free Space Management, Introduction to Paging, Translation Look Aside Buffer, Swapping, Demand Paging, Thrashing, Page replacement algorithms, CPU Virtualization Basics. Concurrency: Concurrency and Threads code, Thread API, Common concurrency problems, Locks, Locked Data Structures, Condition Variables, Mutex, Semaphores, Monitors. Deadlock: Prevention, Detection and Avoidance. Persistence: I/O Devices, Hard Disk Drives, Redundant Disk Arrays (RAID), Files and Directories, File System Implementation, Distributed systems, Inter-process Communication, Data Integrity and Protection.</p>
   </div>
   <div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   </div>
 </div>
</div>
</div>
</td>
</tr>

</tbody>
</table>
</div>
  );
};

export default FacultyList;