import React, { useState } from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  const [openSubuh, setOpenSubuh] = useState(false);
  const [openDzuhur, setOpenDzuhur] = useState(false);
  const [openAshar, setOpenAshar] = useState(false);
  const [openMagrib, setOpenMagrib] = useState(false);
  const [openIsya, setOpenIsya] = useState(false);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-1 text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-2 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-xs mr-1"></i> Subuh <br/> 04.00
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-1 text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-2 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-xs mr-1"></i>  Dzuhur <br/> 04.00
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-1 text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-2 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-xs mr-1"></i>  Ashar <br/> 04.00
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-1 text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-2 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <i className="fas fa-briefcase text-xs mr-1"></i>  Magrib <br/> 04.00
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-1 text-center">
              <a
                className={
                  "text-xs font-bold px-2 py-2 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <i className="fas fa-briefcase text-xs mr-1"></i>  Isya <br/> 04.00
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-1">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className={openSubuh === false ? "truncate": ""}>
                    Salam, reminder
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                  </p>
                  <button onClick={e => {
                    e.preventDefault();
                    setOpenSubuh(openSubuh => !openSubuh);
                  }}>{openSubuh === false ? "readmore": "readless"}</button>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p className={openDzuhur === false ? "truncate": ""}>
                    Salam, reminder
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                  </p>
                  <button onClick={e => {
                    e.preventDefault();
                    setOpenDzuhur(openDzuhur => !openDzuhur);
                  }}>{openDzuhur === false ? "readmore": "readless"}</button>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p className={openAshar === false ? "truncate": ""}>
                    Salam, reminder
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                  </p>
                  <button onClick={e => {
                    e.preventDefault();
                    setOpenAshar(openAshar => !openAshar);
                  }}>{openAshar === false ? "readmore": "readless"}</button>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p className={openMagrib === false ? "truncate": ""}>
                    Salam, reminder
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                  </p>
                  <button onClick={e => {
                    e.preventDefault();
                    setOpenMagrib(openMagrib => !openMagrib);
                  }}>{openMagrib === false ? "readmore": "readless"}</button>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p className={openIsya === false ? "truncate": ""}>
                    Salam, reminder
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                  </p>
                  <button onClick={e => {
                    e.preventDefault();
                    setOpenIsya(openIsya => !openIsya);
                  }}>{openIsya === false ? "readmore": "readless"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Adzan2() {
  return (
    <>
      <Tabs color="green" />
    </>
  );
}