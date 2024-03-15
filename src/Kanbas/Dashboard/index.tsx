import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />

      <h2>Published Courses (12)</h2> <hr />
      <h6>New Course Form</h6>
      <input value={course.name} className="w-25 mb-2 form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="w-25 mb-2 form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="w-25 mb-2 form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="w-25 mb-2 form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <button className="btn btn-primary" onClick={addNewCourse} >
        Add New Course
      </button>
      <button className="mx-2 btn btn-primary" onClick={updateCourse} >
        Update Course
      </button>

      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: 150 }} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}


                  </Link>
                  <p className="card-text">{course.name}</p>

                  <div className="row">
                    <div className="col-4">
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                        Go </Link>
                    </div>
                    <div className="col-4">
                      <button className="btn btn-primary" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                        Delete
                      </button>
                    </div>
                    <div className="col-4">
                      <button className="btn btn-primary" onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                        Edit
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;