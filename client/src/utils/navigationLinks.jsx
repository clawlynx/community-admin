import { LuLayoutDashboard, LuUsers, LuSettings } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LuPlane } from "react-icons/lu";
import { RiUserHeartLine } from "react-icons/ri";
import { BsHouseHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
export const mainNav = [
  {
    name: "Dashboard",
    id: 1,
    icon: <LuLayoutDashboard />,
    url: "./",
    drop: false,
  },
  {
    name: "All Users",
    id: 2,
    icon: <LuUsers />,
    url: "/all-users",
    drop: false,
  },
  {
    name: "Job Portal",
    id: 3,
    icon: <MdOutlineWorkOutline />,
    subname: "jobPortal",
    url: "/job-portal",
    drop: true,
  },
  {
    name: "Study Abroad",
    id: 4,
    icon: <LuPlane />,
    url: "/study-abroad",
    subname: "studyAbroad",
    drop: true,
  },
  {
    name: "E-Commerce",
    id: 5,
    icon: <FiShoppingCart />,
    subname: "ecommerce",
    url: "/e-commerce",
    drop: true,
  },
  {
    name: "Dating",
    id: 6,
    icon: <RiUserHeartLine />,
    url: "/dating",
    subname: "dating",
    drop: true,
  },
  {
    name: "Matrimony",
    id: 7,
    icon: <BsHouseHeart />,
    url: "/matrimony",
    subname: "matrimony",
    drop: true,
  },
  {
    name: "Settings",
    id: 8,
    icon: <LuSettings />,
    url: "/settings",
    subname: "settings",
    drop: true,
  },
];

export const subNavigation = {
  jobPortal: [
    { id: 1, name: "Employers", url: "/job-portal", pathname: "employers" },
    {
      id: 2,
      name: "Candidates",
      url: "/job-portal/candidates",
      pathname: "candidates",
    },
    { id: 3, name: "Jobs", url: "/job-portal/jobs", pathname: "jobs" },
    {
      id: 4,
      name: "Delete Requests",
      url: "/job-portal/delete-requests",
      pathname: "delete-requests",
    },
    {
      id: 5,
      name: "Approvals",
      url: "/job-portal/approvals",
      pathname: "approvals",
    },
  ],
  studyAbroad: [
    { id: 1, name: "All Countries", url: "/study-abroad/countries" },
    { id: 2, name: "Appointments", url: "/study-abroad/appointments" },
    { id: 3, name: "Enquiries", url: "/study-abroad/enquiries" },
  ],
  ecommerce: [],
  dating: [],
  matrimony: [],
  settings: [],
};
