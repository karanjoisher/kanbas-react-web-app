import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();
    const [moduleList, setModuleList] = useState<any[]>(modules);
    const [module, setModule] = useState({
        _id: undefined,
        name: "New Module",
        description: "New Description",
        course: courseId,
    });
    const addModule = (module: any) => {
        const newModule = {
            ...module,
            _id: new Date().getTime().toString()
        };
        const newModuleList = [newModule, ...moduleList];
        setModuleList(newModuleList);
    };
    const deleteModule = (moduleId: string) => {
        const newModuleList = moduleList.filter(
            (module) => module._id !== moduleId);
        setModuleList(newModuleList);
    };
    const updateModule = () => {
        const newModuleList = moduleList.map((m) => {
            if (m._id === module._id) {
                return module;
            } else {
                return m;
            }
        });
        setModuleList(newModuleList);
    };




    //const modulesList = moduleList.filter((module) => module.course === courseId);
    //const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            {/* <!-- Add buttons here --> */}
            <hr />
            <h6>Add/Edit Course Form</h6>
            <input className="w-25 mb-2 form-control" value={module.name}
                onChange={(e) => setModule({
                    ...module, name: e.target.value
                })}
            />
            <textarea className="mb-2 form-control" value={module.description}
                onChange={(e) => setModule({
                    ...module, description: e.target.value
                })}
            />

            <button className="mb-2 btn btn-primary" onClick={() => { addModule(module) }} >
                Add New Module
            </button>
            <button className="mb-2 btn btn-primary" onClick={updateModule}>
                Update
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
                        //onClick={() => setSelectedModule(module)}
                        >
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <button className="rounded btn btn-danger p-1 mb-1"
                                        onClick={() => deleteModule(module._id)}>
                                        Delete
                                    </button>
                                    <button className="rounded btn btn-primary p-1 mx-2 mb-1"
                                        onClick={(event) => { setModule(module); }}>
                                        Edit
                                    </button>
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />

                                </span>
                            </div>
                            {/* {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson, index) => (
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
                            )} */}
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;