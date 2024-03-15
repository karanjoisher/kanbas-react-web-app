import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    //const modulesList = moduleList.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(moduleList.filter((module) => module.course === courseId)[0]);
    return (
        <>
            {/* <!-- Add buttons here --> */}
            <hr />
            <h6>Add/Edit Course Form</h6>
            <input className="w-25 mb-2 form-control" value={module.name}
                onChange={(e) => dispatch(setModule({
                    ...module, name: e.target.value
                }))}
            />
            <textarea className="mb-2 form-control" value={module.description}
                onChange={(e) => dispatch(setModule({
                    ...module, description: e.target.value
                }))}
            />

            <button className="mb-2 btn btn-primary" onClick={() => { dispatch(addModule(module)) }} >
                Add New Module
            </button>
            <button className="mb-2 mx-2 btn btn-primary" onClick={() => {dispatch(updateModule(module))}}>
                Update Module
            </button>
            <hr />
            <div className="button-container">
                <button className="top-buttons" type="button">Collapse All</button>
                <button className="top-buttons" type="button">View Progress</button>

                <select className="top-buttons">
                    <option value="PUBLISHALL">Publish All</option>
                </select>

                <button className="top-buttons module" id="module-button" type="button">
                    <FaPlus className="mx-2" />
                    Module
                </button>

                <button className="top-buttons">
                    <FaEllipsisV />
                </button>
            </div>



            <ul className="list-group wd-modules">
                {moduleList
                    .filter((module) => module.course === courseId).map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                        onClick={() => setSelectedModule(module)}
                        >
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <button className="rounded btn btn-danger px-1"
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>
                                    <button className="rounded btn btn-primary px-1 mx-2"
                                        onClick={(event) => { dispatch(setModule(module)); }}>
                                        Edit
                                    </button>
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />

                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: any, index: number) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;