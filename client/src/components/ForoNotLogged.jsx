import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getForoById,
  updateForo,
  updateDeleteCommentorAnswer,
} from "../redux/actions";
import { useForm } from "react-hook-form";

export default function ForoNotLogged() {
  let foroId = "6325148393901f7583647c03";

  const dispatch = useDispatch();
  const { foro } = useSelector((state) => state.programandoando);

  useEffect(() => {
    dispatch(getForoById(foroId));
  }, [foroId]);

  // console.log(foro)

  if (!foro) {
    <h1>Cargando Foro</h1>;
  } else {
    return (
      <div className="bg-white md:w-7/12 rounded-md mb-10">
        <div
          style={{ backgroundColor: "rgb(17, 52, 82)" }}
          className="rounded-t-xl"
        >
          <p
            style={{ color: "rgb(240, 240, 240)" }}
            className="text-center py-5 text-xl font-bold uppercase"
          >
            {" "}
            General Forum{" "}
          </p>
        </div>
        <div
          style={{ height: 500 }}
          className="flex justify-center overflow-hidden hover:overflow-y-scroll scrolling-touch"
        >
          <form className="bg-white w-10/12">
            {Object.keys(foro).length > 0 ? (
              foro.comments.map((comment) => (
                <ol
                  style={{ borderWidth: 1, height: 320 }}
                  className="rounded-md my-5 border-gray-300 overflow-hidden hover:overflow-y-scroll scrolling-touch"
                >
                  <div className="bg-gray-400 rounded-t-md py-1">
                    <p className="text-lg text-center font-bold text-white">
                      {comment.authorComment
                        ? comment.authorComment.name
                        : "no se encuenta master"}
                    </p>
                  </div>
                  <div>
                    <p className="text-md text-center font-bold pt-5">
                      {comment.content}
                    </p>
                  </div>
                  <div className=" my-5">
                    <h3>
                      {comment.answers?.map((answer) => (
                        <ol className="bg-gray-200 my-3 mx-3 p-4 rounded-md">
                          <p className="text-sm font-bold">
                            {answer.authorComment ? (
                              answer.authorComment.name
                            ) : (
                              <p>No tiene autor</p>
                            )}
                          </p>
                          <p className="text-xs">{answer.content}</p>
                        </ol>
                      ))}
                    </h3>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className="pb-5"
                  >
                    <input
                      className="border border-gray-300 rounded-l-md pl-3 text-xs"
                      placeholder="Comment..."
                    />
                    <h3
                      style={{
                        width: 150,
                        backgroundColor: "rgb(55, 109, 109)",
                      }}
                      className="text-center bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-r-md"
                    >
                      Register To Comment
                    </h3>
                  </div>
                </ol>
              ))
            ) : (
              <h2>No se cumplió master</h2>
            )}
          </form>
        </div>
        <div
          style={{ backgroundColor: "rgb(17, 52, 82)" }}
          className="h-12 rounded-b-xl"
        ></div>
      </div>
    );
  }
}
