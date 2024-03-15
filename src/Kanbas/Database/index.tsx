import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import enrollments from "./enrollments.json";
import users from "./users.json";
import grades from "./grades.json";

let db = {
    courses: courses,
    modules: modules,
    assignments: assignments,
    users: users,
    enrollments: enrollments,
    grades: grades
}
export { courses, modules, assignments, users, enrollments, grades, db };