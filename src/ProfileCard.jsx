import React from "react";
import { Link } from "react-router-dom";
export default function ProfileCard(data){
    return(
        <>
        <div className="container">
            <div className="row py-2">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-title">
                            <h3 className="text-center text-success">User Profile</h3>
                        </div>
                        <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>name</th>
                                            <th>email</th>
                                            <th>phone</th>
                                            <th>bio</th>
                                            <th>address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{data.data.name}</td>
                                            <td>{data.data.email}</td>
                                            <td>{data.data.phone}</td>
                                            <td>{data.data.bio}</td>
                                            <td>{data.data.address}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    <br />
                    <center>
                    <Link to='/'><div className="btn btn-outline-danger me-2">Go Back</div></Link>
        <Link to='/attendance'><div className="btn btn-outline-primary ms-2">Attendance</div></Link>
                    </center>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>
        </>
    )
}