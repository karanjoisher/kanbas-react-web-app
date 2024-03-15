import React, { useState } from "react";
import { FaCheckCircle, FaClipboard, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignment } from "./assignmentsReducer";




function Assignments() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const assignments = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    function handleDelete(id: any) {
        const confirmed = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmed) dispatch(deleteAssignment(id));
    }


    return (
        <>
            <div className="top-row">
                <input className="my-1 form-control w-25 d-inline-block" type="text" placeholder="Search for assignments" />
                <span className="float-end">
                    <button className="border-1 border-light p-2 me-2"><FaPlus className="me-1" />Group</button>
                    <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/new`}><button className="border-1 border-light p-2 me-2 text-light bg-danger"><FaPlus className="me-1" />Assignment</button></Link>

                    <button className="border-1 border-light p-2 me-2" onClick={() => window.location.href = '/Kanbas/Courses/Assignments/Edit/screen.html'}><FaEllipsisV className="mb-1" /></button>
                </span>
            </div>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <span className="p-1 mx-3 border border-dark rounded-5">40% of Total</span>
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignments.filter(
                            (assignment) => assignment.course === courseId).map((assignment) => (
                                <li className="list-group-item">
                                    <FaEllipsisV className="me-2" />
                                    <FaClipboard className="me-2 text-success" />
                                    <Link
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                    <span className="float-end">
                                        <button className="btn btn-danger mx-2 rounded px-2" onClick={() => { handleDelete(assignment._id) }}>Delete</button>
                                        <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                                </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;