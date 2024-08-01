import React, { useEffect, useState } from "react";
import { mainNav, subNavigation } from "../../utils/navigationLinks";
import { RiArrowDropDownFill, RiArrowDropRightFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [showSubNav, setShowSubNav] = useState(false);
  const [active, setActive] = useState("");
  const [subActive, setSubActive] = useState("");
  const [subNav, setSubNav] = useState();
  const [subNavArr, setSubNavArr] = useState([]);
  function handleClick(name, activeName) {
    setShowSubNav(!showSubNav);
    const arr = subNavigation[name];
    setSubNavArr(arr);
    setSubNav(name);
    setActive(activeName);
    setSubActive(activeName);
  }

  useEffect(() => {
    setSubActive(pathname);
    setActive(pathname);
  }, []);
  return (
    <div className="min-h-screen overflow-auto w-72 bg-teal-900 rounded-r-3xl p-5">
      <h1 className="text-2xl text-teal-300 mb-5 border-b border-teal-700 pb-7">
        Community Admin
      </h1>
      <div className="flex flex-col justify-start items-start gap-5 text-neutral-200 pt-5">
        {mainNav.map((x) => (
          <div key={x.id} className="w-full">
            <Link
              to={x.url}
              onClick={
                x.drop
                  ? () => handleClick(x.subname, x.url)
                  : () => {
                      setActive(x.url);
                      setSubActive("");
                    }
              }
              className={`flex gap-3 text-lg border-b border-teal-700 p-5 w-full cursor-pointer hover:ml-3 nav-link hover:bg-teal-500 rounded-2xl hover:shadow-lg hover:shadow-teal-500 ${
                active.includes(x.url) && "bg-teal-500"
              }`}
            >
              <span>{x.icon}</span>
              <h1>{x.name}</h1>
              <span className={`${x.drop ? "" : "hidden"} ms-auto`}>
                <RiArrowDropDownFill />
              </span>
            </Link>
            {showSubNav && subNav === x.subname && (
              <div className="flex flex-col gap-5 ms-5">
                {subNavArr.length > 0 &&
                  subNavArr.map((x) => (
                    <Link
                      key={x.id}
                      to={x.url}
                      onClick={() => setSubActive(x.pathname)}
                      className={`flex gap-3 cursor-pointer hover:bg-teal-500 p-3 rounded-xl hover:ml-2 nav-link ${
                        subActive.includes(x.pathname) && "bg-teal-500"
                      }`}
                    >
                      <span>
                        <RiArrowDropRightFill />
                      </span>
                      <h1>{x.name}</h1>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
