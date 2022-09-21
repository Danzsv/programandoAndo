import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserHome } from "../redux/actions";
import oro from "../utils/images/oro.png";
import plata from "../utils/images/plata.png";
import bronce from "../utils/images/bronce.png";
import { NavLink } from "react-router-dom";

let usuariosPrueba = [
  {
    language: "english",
    country: "",
    birthday: "2022-09-13T19:02:20.031Z",
    ownPath: [],
    favorites: [],
    status: "pending",
    _id: "6318e5dbcc4b37d9076d0eda",
    name: "Agustin Figueredo",
    username: "figueredoagustin6692",
    email: "figueredoagustin6692@gmail.com",
    schools: [],
    role: "user",
    contributor: 150,
    banned: false,
    deleted: false,
    createdAt: "2022-09-07T18:41:31.624Z",
    updatedAt: "2022-09-07T18:41:31.624Z",
  },
  {
    country: "",
    birthday: "2022-09-13T19:02:20.031Z",
    _id: "631a907e8685cf1046907719",
    name: "Franco Giuliano",
    username: "francosebastiangiuliano",
    email: "francosebastiangiuliano@gmail.com",
    schools: [],
    role: "user",
    language: "english",
    ownPath: [],
    favorites: [],
    contributor: 340,
    banned: false,
    status: "active",
    confirmationCode:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZyYW5jb3NlYmFzdGlhbmdpdWxpYW5vQGdtYWlsLmNvbSIsImlhdCI6MTY2MjY4NTMxMH0.EAT0aT3D-763yp2_rl4MEric41CprU87JhDA06ukHDk",
    deleted: false,
    createdAt: "2022-09-09T01:01:50.492Z",
    updatedAt: "2022-09-12T17:54:38.830Z",
  },
  {
    country: "",
    birthday: "2022-09-13T19:02:20.031Z",
    _id: "631b793e3810761965816523",
    name: "Daniel Felipe Martínez Cubillos",
    username: "daniespartan116",
    email: "daniespartan116@gmail.com",
    schools: [],
    role: "user",
    language: "english",
    ownPath: [],
    favorites: [],
    contributor: 120,
    banned: false,
    status: "pending",
    confirmationCode:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmllc3BhcnRhbjExNkBnbWFpbC5jb20iLCJpYXQiOjE2NjI3NDQ4OTR9.sPmjkPUVVqW4DOcF217G_N6H-ql56y7sGmIrMGua1qg",
    deleted: false,
    createdAt: "2022-09-09T17:34:54.925Z",
    updatedAt: "2022-09-09T17:34:54.925Z",
  },
  {
    _id: "631be38a5da970e706cfae2b",
    name: "Luis Blanco",
    username: "luiswblanco",
    email: "luiswblanco@gmail.com",
    schools: [],
    role: "user",
    language: "english",
    country: "Venezuela",
    birthday: "2022-09-09T22:59:19.300Z",
    ownPath: [],
    favorites: [],
    contributor: 90,
    banned: false,
    status: "active",
    confirmationCode:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1aXN3YmxhbmNvQGdtYWlsLmNvbSIsImlhdCI6MTY2Mjc3MjEwNn0.WWtcYLsheI6EU9BsKaPGFCqBWi-99JTaPIcy3y3FJRs",
    deleted: false,
    createdAt: "2022-09-10T01:08:26.726Z",
    updatedAt: "2022-09-12T04:46:14.902Z",
  },
  {
    _id: "631be6ea5da970e706cfae73",
    name: "Luis Blanco",
    username: "luchoapifree",
    email: "luchoapifree@gmail.com",
    schools: [],
    role: "admin",
    language: "spanish",
    country: "Burundi",
    birthday: "2022-09-09T22:59:19.300Z",
    ownPath: [],
    favorites: [],
    contributor: 15,
    banned: false,
    status: "active",
    confirmationCode:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2hvYXBpZnJlZUBnbWFpbC5jb20iLCJpYXQiOjE2NjI3NzI5NzB9.o1kIQw_7pJPDZ-3-4uKrf8o_UJG4ainPgSlNi2KE8eI",
    deleted: false,
    createdAt: "2022-09-10T01:22:50.619Z",
    updatedAt: "2022-09-10T22:41:18.467Z",
  },
  {
    _id: "631c9d5aed1ba6a772d15a9e",
    name: "Juan Alvarez",
    username: "juan-alvarz",
    email: "ja0031471@gmail.com",
    schools: [],
    role: "user",
    language: "english",
    country: "",
    birthday: "2022-09-10T14:08:09.207Z",
    ownPath: [],
    favorites: ["63110f06a465f77f6f1c7d5a"],
    contributor: 1006,
    banned: false,
    status: "active",
    confirmationCode:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphMDAzMTQ3MUBnbWFpbC5jb20iLCJpYXQiOjE2NjI4MTk2NzR9.uiHThLsVIRNes4hkU3js4m7JGZeTYHQzLCyn0FyTT9k",
    deleted: false,
    createdAt: "2022-09-10T14:21:14.096Z",
    updatedAt: "2022-09-13T17:26:08.901Z",
  },
  {
    _id: "631e746e357107a9f4cd072b",
    name: "Rogelio Daniel Sandoval Vasquez",
    username: "danzsv94",
    email: "danzsv94@outlook.es",
    schools: [],
    role: "user",
    language: "english",
    country: "Peru",
    birthday: "2022-09-11T23:28:54.490Z",
    ownPath: [],
    favorites: [
      "631108b0bf394e803a3a9129",
      "63110dc73c5016947e296ef5",
      "63110f06a465f77f6f1c7d5a",
      "63110ffb53144f9472321daf",
      "6311138053144f9472321db9",
      "6311173653144f9472321dc5",
    ],
    contributor: 2500,
    banned: false,
    status: "active",
    confirmationCode:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbnpzdjk0QG91dGxvb2suZXMiLCJpYXQiOjE2NjI5NDAyNzB9.CpYQzjSdzFPYkkf6iWq3OLr5sIDHGxR6gfL3_jY5VhE",
    deleted: false,
    createdAt: "2022-09-11T23:51:10.689Z",
    updatedAt: "2022-09-13T15:34:43.505Z",
  },
  {
    _id: "631f733499ce1e33dded7f75",
    name: "Rogelio Sandoval",
    username: "danzsv94",
    email: "danzsv94@gmail.com",
    schools: [],
    role: "user",
    language: "english",
    country: "",
    birthday: "2022-09-12T16:19:18.315Z",
    ownPath: [],
    favorites: [],
    contributor: 500,
    banned: false,
    status: "active",
    confirmationCode:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbnpzdjk0QGdtYWlsLmNvbSIsImlhdCI6MTY2MzAwNTQ5Mn0.8lTVpw1BPQohTLTH1Z_pz4Caze_dEGZpzQn5yJdwRWY",
    deleted: false,
    createdAt: "2022-09-12T17:58:12.380Z",
    updatedAt: "2022-09-12T17:58:40.305Z",
  },
  {
    _id: "6320d1c4f94e4743065b174f",
    name: "Dsxie Infinity",
    username: "team.dsxie",
    email: "team.dsxie@gmail.com",
    schools: [],
    role: "user",
    language: "english",
    country: "",
    birthday: "2022-09-13T16:55:45.097Z",
    ownPath: [],
    favorites: [],
    contributor: 3200,
    banned: false,
    status: "active",
    confirmationCode:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlYW0uZHN4aWVAZ21haWwuY29tIiwiaWF0IjoxNjYzMDk1MjM2fQ.9xBQ8MBKvXtwaI3H6dpCI5MiYnX-xgeNrL6wcWzG_aA",
    deleted: false,
    createdAt: "2022-09-13T18:53:56.552Z",
    updatedAt: "2022-09-13T18:54:51.577Z",
  },
];

const RankUserHome = () => {
  const dispatch = useDispatch();

  const { usersHome } = useSelector((state) => state.programandoando);
  console.log(usersHome);

  useEffect(() => {
    dispatch(getUserHome());
  }, [dispatch]);

  let ranking = [];
  for (let i = 0; i < usersHome.length; i++) {
    if (usersHome[i].contributor > 0) {
      ranking.push(usersHome[i]);
    }
  }

  ranking.sort((a, b) => b.contributor - a.contributor);

  return (
    <div
      className="flex justify-center items-center "
      style={{ backgroundColor: "rgb(240, 240, 240)" }}
    >
      <div
        style={{ backgroundColor: "#fff", borderRadius: 10, height: 600 }}
        className="w-80 md:w-11/12  shadow-lg py-5"
      >
        <h2
          className="text-lg md:text-2xl text-center font-bold pb-2 uppercase"
          style={{ color: "#376D6D" }}
        >
          top 5 donators
        </h2>
        <div className=" flex justify-center">
          <div className="w-11/12">
            {!ranking.length ? (
              <span className="font-bold text-2xl text-white">
                No hay usuarios
              </span>
            ) : (
              ranking.map((elemento, index) => {
                return (
                  <div
                    key={index}
                    className="m-2 py-3 lg:m-3 md:py-4 px-5 rounded-md shadow-lg "
                    style={{ backgroundColor: "rgb(17, 52, 82)" }}
                  >
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                      <li className="pb-3 sm:py-1">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-sm font-medium text-gray-900 truncate "
                              style={{
                                color: "rgb(201, 196, 184)",
                                fontSize: 15,
                              }}
                            >
                              {elemento.name}
                            </p>
                            <p
                              className="text-xs text-gray-500 truncate dark:text-gray-400"
                              style={{ color: "rgb(201, 196, 184)" }}
                            >
                              {elemento.username}
                            </p>
                          </div>
                          <div
                            className="text-xs md:text-md inline-flex items-center font-semibold"
                            style={{ color: "rgb(201, 196, 184)" }}
                          >
                            <img
                              src={index === 0 ? oro : ""}
                              className="pr-0.5"
                            ></img>
                            <img
                              src={index === 1 ? plata : ""}
                              className="pr-0.5"
                            ></img>
                            <img
                              src={index === 2 ? bronce : ""}
                              className="pr-0.5"
                            ></img>
                            {elemento.contributor}
                          </div>
                          <div>
                            <NavLink to="/userrank" state={elemento}>
                              <button
                                style={{ backgroundColor: "rgb(55, 109, 109)" }}
                                className="w-16 lg:w-32 bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md"
                                type="button"
                              >
                                More Detail
                              </button>
                            </NavLink>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                );
              })
            )}
            <div className="flex justify-center  divide-gray-200">
              <NavLink to="/rankusers">
                <button
                  style={{ width: 130, backgroundColor: "rgb(55, 109, 109)" }}
                  className="my-2 bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md"
                  type="button"
                >
                  View More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankUserHome;
