import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const { assignmentId } = useParams();

  const assignments = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignment);
  const [selectedAssignment, setSelectedAssignment] = useState(assignments.find(
    (assignment) => assignment._id === assignmentId) || assignment);
  
  


  const handleSave = () => {
    let temp = {...selectedAssignment};
    temp.course = courseId;
    if (assignmentId == "new") {
      console.log("vamos");
      dispatch(addAssignment(temp));
      console.log(assignments);
    } else {
      dispatch(updateAssignment(temp));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (

    <div>
      <h4>A1</h4>
      <hr />
      <div className="mb-3">
        <input type="text" className="form-control" value={selectedAssignment?.title} onChange={(e) => setSelectedAssignment({
          ...selectedAssignment, title: e.target.value
        })} />
      </div>
      <div className="mb-3">
        <textarea className="form-control" onChange={(e) => setSelectedAssignment({
          ...selectedAssignment, description: e.target.value
        })}>{selectedAssignment?.description}</textarea>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="points" className="form-label">Points</label>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="points" value={selectedAssignment?.points} onChange={(e) => setSelectedAssignment({
              ...selectedAssignment, points: e.target.value
            })} />
          </div>
        </div>
        {/* <br />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="assignment-grp" className="form-label">Assignment Group</label>
          </div>
          <div className="col-sm-4">
            <select className="form-select" aria-label="ASSIGNMENTS" id="assignment-grp">
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
        </div> */}
        {/* <br />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="grade" className="form-label">Display Grade as</label>
          </div>
          <div className="col-sm-4">
            <select className="form-select" aria-label="Percentage" id="grade">
              <option selected>Percentage</option>
            </select>
            <br />
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="do-not-count" />
              <label className="form-check-label" htmlFor="do-not-count">
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
        </div> */}
        <br />
        <div className="row">
          <div className="col-sm-4">
            <label className="form-label">Assign</label>
          </div>
          <div className="col-sm-4">
            {/* <label htmlFor="exampleFormControlInput4" className="form-label">
              <h5>Assign</h5>
            </label>
            <select className="form-select" aria-label="Disabled select example" disabled>
              <option selected>Everyone</option>
            </select>
            <br /> */}
            <label htmlFor="duedate" className="form-label">
              <h5>Due</h5>
            </label>
            <input type="date" className="form-control" id="duedate" value={selectedAssignment?.dueDate} onChange={(e) => setSelectedAssignment({
              ...selectedAssignment, dueDate: (new Date(e.target.value)).toISOString().split('T')[0]
            })} />
            <br />
            <label htmlFor="availableFrom" className="form-label">
              <h5>Available from</h5>
            </label>
            <input type="date" className="form-control" id="availableFrom" value={selectedAssignment?.availableFromDate} onChange={(e) => setSelectedAssignment({
              ...selectedAssignment, availableFromDate: (new Date(e.target.value)).toISOString().split('T')[0]
            })} />
            <br />
            <label htmlFor="untilDate" className="form-label">
              <h5>Until</h5>
            </label>
            <input type="date" className="form-control" id="untilDate" value={selectedAssignment?.availableUntilDate} onChange={(e) => setSelectedAssignment({
              ...selectedAssignment, availableUntilDate: (new Date(e.target.value)).toISOString().split('T')[0]
            })} />
            <br />
          </div>
        </div>
        <br />

        <div className="row">
          {/* <div className="col-10 align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="notify-users" />
              <label className="form-check-label" htmlFor="notify-users">
                Notify users that this content has changed
              </label>
            </div>
          </div> */}
          <div className="float-right">
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
              Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger float-end">
              Cancel
            </Link>
          </div>
        </div>

      </div>
    </div>
  );

}
export default AssignmentEditor;