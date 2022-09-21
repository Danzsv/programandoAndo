import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
  getAllCourses,
  getFavorites,
  getAllCoursesAZ,
  getAllCoursesZA,
  getCourses10more,
  getCourses10h,
  getCourses5h,
  getCourses3h,
} from "../redux/actions";
import Loader from "./Loader";
import NavBar from "./NavBar";
import { Paginated } from "./Paginated";
import SearchBar from "./SearchBar";
import imageNotFound from "../utils/images/404person.png";

function FiltersCourses({
  paginado,
  courses,
  cursosPagina,
  cursoActual,
  prev,
  next,
  setCursoActual,
  primerCurso,
  ultimoCurso,
  handleFilterAlph,
}) {
  //Usuario registrado
  // let userLocal = window.localStorage.getItem("user");
  // let userObj = JSON.parse(userLocal);

  // const courses = useSelector((state) => state.programandoando.courses);

  // const [coursesPowFilter, setCoursesPowFilter] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllCourses());
  //   if (userObj) {
  //     dispatch(getUser(userObj.user._id));
  //     dispatch(getFavorites(userObj.user._id));
  //   }
  // }, [dispatch, coursesPowFilter]);

  // const handleFilterAlph = (e) => {
  //   setCursoActual(1);
  //   e.target.checked === true
  //     ? dispatch(getAllCoursesZA())
  //     : dispatch(getAllCoursesAZ());
  // };

  const path = "courses";

  /*==================course not found page========================== */

  // return (
  //   <div
  //     style={{
  //       backgroundColor: "rgb(198, 198, 198)",
  //     }}
  //   >
  //     <div>{/* <NavBar /> */}</div>
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         padding: "10px",
  //       }}
  //     >
  //       {/* <SearchBar path={path} setPagina={setCursoActual} /> */}
  //     </div>
  //     <div>
  //       <div
  //         style={{
  //           display: "flex",
  //           flexDirection: "column",
  //           alignItems: "center",
  //           width: "90%",
  //           margin: "auto",
  //         }}
  //       >
  //         <img
  //           src={imageNotFound}
  //           alt="notfound"
  //           style={{ width: "35%", marginTop: 40 }}
  //         />
  //         <h1
  //           style={{
  //             fontSize: "2rem",
  //             padding: "30px",
  //           }}
  //         >
  //           Course not found
  //         </h1>
  //         <span>no results found, please try another course</span>
  //       </div>
  //     </div>
  //   </div>
  // );
  // } else if (!courses.length) {
  //   /* ======================Loading page====================== */
  //   return (
  //     <div>
  //       <Loader />
  //     </div>
  //   );

  /* =======================All correct!=================== */
  // let durationCourse = (course) => {
  //   let temporaly = course.videos.map((e) => e.duration);

  //   const toSeconds = (time) => {
  //     if (time.length > 5) {
  //       let parse = time.split(":");
  //       let newParse = [
  //         parseInt(parse[0]) * 3600,
  //         parseInt(parse[1], 10) * 60,
  //         parseInt(parse[2], 10),
  //       ];
  //       let sumParse = newParse[0] + newParse[1] + newParse[2];
  //       return sumParse;
  //     }
  //     if (time.length <= 5) {
  //       let parse = time.split(":");
  //       let newParse = [parseInt(parse[0], 10) * 60, parseInt(parse[1], 10)];
  //       let sumParse = newParse[0] + newParse[1];
  //       return sumParse;
  //     }
  //   };
  //   let secondsDuration = temporaly.map((e) => toSeconds(e));

  //   let oneDuration = secondsDuration.reduce((sum, a) => sum + a, 0);

  //   let object = {
  //     ...course,
  //     duration: oneDuration,
  //   };

  //   return object;
  // };

  // let coursesPow = courses.map((e) => durationCourse(e));

  //=========== lógica del duration ==========

  //=========== handles =================
  // const handleFilterAlph = (e) => {
  //   setCursoActual(1);
  //   e.target.checked === true
  //     ? dispatch(getAllCoursesZA())
  //     : dispatch(getAllCoursesAZ());
  // };

  const handleFilterDuration = (e) => {
    if (e.target.value === "allDurations") {
      dispatch(getAllCourses());
      setCursoActual(1);
    }
    if (e.target.value === "10hmore") {
      dispatch(getCourses10more());
      setCursoActual(1);
    }
    if (e.target.value === "10h") {
      dispatch(getCourses10h());
      setCursoActual(1);
    }
    if (e.target.value === "5h") {
      dispatch(getCourses5h());
      setCursoActual(1);
    }
    if (e.target.value === "3h") {
      dispatch(getCourses3h());
      setCursoActual(1);
    }
  };

  //==========================================

  // ==============================================

  return (
    <div>
      <div className="flex flex-col items-center justify-around px-5 py-10 lg:flex-row">
        {/* Filtrados */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="pr-2">A-Z</span>
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <div></div>
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
                onChange={(e) => handleFilterAlph(e)}
              />
              <div
                style={{
                  backgroundColor: "rgb(17, 52, 82)",
                }}
                className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
              ></div>
            </label>
            <span
              style={{
                paddingRight: "10px",
                paddingLeft: "10px",
              }}
            >
              Z-A
            </span>
          </div>

          {/* DURATION */}
          <div>
            <select
              id="countries"
              style={{ width: 130 }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40% py-1"
              onChange={(e) => handleFilterDuration(e)}
            >
              <option value={"allDurations"}>All Durations</option>
              <option value={"10hmore"}>More than 10 hours</option>
              <option value={"10h"}>Up to 10 hours</option>
              <option value={"5h"}>Up to 5 hours</option>
              <option value={"3h"}>Up to 3 hours</option>
            </select>
          </div>
        </div>

        {/* Paginated */}
        <div className="grid justify-items-center my-5">
          <Paginated
            setPagina={paginado}
            videos={courses.length}
            videosPagina={cursosPagina}
            paginaActual={cursoActual}
            prev={prev}
            next={next}
          />
        </div>

        <div>
          <SearchBar path={path} setPagina={setCursoActual} />
        </div>
      </div>
    </div>
  );
}

export default FiltersCourses;
