import React, { useEffect, useState } from "react";
import FormInput from "../../../FormInput";
import FormSelect from "../../../FormSelect";
import { Link } from "react-router-dom";
import useEditJob from "../../../../hooks/jobportal/useEditJob";
import Loading from "../../../Loading";

export default function EditJobSection({ data }) {
  const [jobTitle, setJobTitle] = useState(data?.jobTitle || "");
  const [category, setCategory] = useState(
    data?.category || "Healthcare & Medical"
  );
  const [address, setAddress] = useState(data?.jobPlace || "");
  const [deadline, setDeadline] = useState("");
  const [qualification, setQualification] = useState(
    data?.qualification || "Certificate"
  );
  const [experience, setExperience] = useState(data?.experience || "All");
  const [gender, setGender] = useState(data?.gender || "All");
  const [location, setLocation] = useState(data?.jobLocation || "On-site");
  const [type, setType] = useState(data?.jobType || "Full-time");
  const [salary, setSalary] = useState(data?.salary || "");
  const [skills, setSkills] = useState(data?.skills?.toString() || "");
  const [desc, setDesc] = useState(data?.description || "");
  const { loading, editJob } = useEditJob();

  useEffect(() => {
    if (data && data.deadline) {
      const formatedDate = new Date(data.deadline);
      const dateToShow = formatedDate.toISOString().split("T")[0];
      setDeadline(dateToShow);
    }
  }, []);

  async function handleSave() {
    await editJob({
      jobTitle,
      category,
      address,
      deadline,
      qualification,
      experience,
      gender,
      location,
      type,
      salary,
      skills,
      desc,
      id: data?._id,
    });
  }

  return (
    <div className="w-full flex items-center">
      <div className="bg-teal-300 p-5 rounded-lg flex flex-col items-center w-3/5 mx-auto">
        <h1 className="text-2xl">Edit Candidate</h1>
        <FormInput
          title={"Job Title"}
          type={"text"}
          value={jobTitle}
          onchange={(e) => setJobTitle(e.target.value)}
        />
        <FormSelect
          title={"Job Category"}
          list={[
            "Healthcare & Medical",
            "Software Development & IT",
            "Finance & Accounting",
            "Education & Training",
            "Engineering & Technical",
            "Construction & Skilled Trades",
            "Sales, Marketing & Advertising",
            "Customer Service & Support",
            "Human Resources & Recruitment",
            "Management & Executive",
          ]}
          value={category}
          onchange={(e) => setCategory(e.target.value)}
        />
        <FormInput
          title={"Job Address"}
          type={"text"}
          value={address}
          onchange={(e) => setAddress(e.target.value)}
        />
        <FormInput
          title={"Deadline"}
          type={"date"}
          value={deadline}
          onchange={(e) => setDeadline(e.target.value)}
        />
        <FormSelect
          title={"Qualification"}
          list={[
            "Certificate",
            "Diploma",
            "Bachelors Degree",
            "Masters Degree",
            "Doctorate",
          ]}
          value={qualification}
          onchange={(e) => setQualification(e.target.value)}
        />
        <FormSelect
          title={"Experience"}
          list={["All", "fresher", "0-1", "1-2", "2-4", "4-6", ">6"]}
          value={experience}
          onchange={(e) => setExperience(e.target.value)}
        />
        <FormSelect
          title={"Gender"}
          list={["All", "Male", "Female"]}
          value={gender}
          onchange={(e) => setGender(e.target.value)}
        />
        <FormSelect
          title={"Job Location"}
          list={["On-site", "Remote", "W-F-H", "Hybrid"]}
          value={location}
          onchange={(e) => setLocation(e.target.value)}
        />
        <FormSelect
          title={"Job Type"}
          list={["Full-time", "Part-time", "Internship"]}
          value={type}
          onchange={(e) => setType(e.target.value)}
        />
        <FormInput
          title={"Salary"}
          type={"number"}
          value={salary}
          onchange={(e) => setSalary(e.target.value)}
        />
        <FormInput
          title={"Skills"}
          type={"text"}
          value={skills}
          onchange={(e) => setSkills(e.target.value)}
        />

        <div className="form-row">
          <label className="form-label">description</label>
          <div className="flex items-center">
            <textarea
              className="w-full py-1 px-3 rounded-lg bg-teal-200 border border-gray-300 text-gray-900"
              rows={12}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 w-full">
          <Link
            to={`/job-portal/jobs/${data?._id}`}
            className="px-3 py-2 bg-teal-200 rounded-lg hover:bg-teal-100 nav-link"
          >
            Cancel
          </Link>
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-3 py-2 bg-teal-400 rounded-lg hover:bg-teal-500 nav-link"
          >
            Save
          </button>
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
}
