import React from "react";
import { Link } from "react-router-dom";
export default function Attendance(data){
    return(
        <>
    <div className="container">
        <div className="row py-2">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="card">
                    <div className="card-title">
                        <h3 className="text-center text-success">User Attendance</h3>
                    </div>
                    <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>day</th>
                                        <th>date</th>
                                        <th>status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{data.data.name}</td>
                                        <td>{data.data.day}</td>
                                        <td>{data.data.date}</td>
                                        <td>{data.data.status}</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                <br />
                <center>
                    <Link to='/profile-card'><div className="btn btn-outline-danger me-2">Go Back</div></Link>
                    </center>
            </div>
            <div className="col-sm-1"></div>
        </div>
    </div>
    </>
    )
}