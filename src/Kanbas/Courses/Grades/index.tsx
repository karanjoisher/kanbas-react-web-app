import { FaArrowLeft, FaCaretDown, FaFile, FaFilter } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="mt-3">
            <h1>Grades</h1>
            <div className="row mb-4">
                <div className="col-12">
                    <span className="float-end">
                        <button className="btn btn-secondary me-2" type="button">
                            <FaFile className="me-2 mb-1"/>Import</button>

                        <button className="btn btn-secondary" type="button">
                            <FaArrowLeft className="mb-1 me-2"/> Export
                            <FaCaretDown className="ms-2 mb-1"/>
                        </button>
                        <button className="btn grades-button" type="button"><i className="fa-solid fa-gear"></i></button>
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        <h5>Student Names</h5>
                    </label>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="exampleFormControlInput2" className="form-label">
                        <h5>Assignment Names</h5>
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <select className="form-select" aria-label="Disabled select example">
                        <option value="" disabled selected>Search Students</option>
                    </select>
                </div>
                <div className="col-sm-6">
                    <select className="form-select" aria-label="Disabled select example">
                        <option value="" disabled selected>Search Assignments</option>
                    </select>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-2">
                    <button type="button" className="my-3 btn btn-secondary">
                        <FaFilter className="me-2 mb-1"/>Apply Filters</button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {as.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;