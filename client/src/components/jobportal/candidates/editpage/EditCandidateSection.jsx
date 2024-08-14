import React, { useState } from "react";
import FormInput from "../../../FormInput";
import FormSelect from "../../../FormSelect";
import { Link } from "react-router-dom";
import useEditJobSeeker from "../../../../hooks/jobportal/useEditJobSeeker";
import Loading from "../../../Loading";

export default function EditCandidateSection({ data }) {
  const [fullName, setFullName] = useState(data?.fullName || "");
  const [role, setRole] = useState(data?.oneWord || "");
  const [experience, setExperience] = useState(
    data?.totalExperience || "fresher"
  );
  const [skills, setSkills] = useState(data?.skills?.toString() || "");
  const [qualification, setQualification] = useState(
    data?.qualification || "Certificate"
  );
  const [location, setLocation] = useState(
    data?.preferredLocation?.toString() || ""
  );
  const [portfolio, setPortFolio] = useState(data?.portfolio || "");
  const [languages, setLanguages] = useState(data?.languages?.toString() || "");
  const [github, setGithub] = useState(data?.github || "");
  const [expected, setExpected] = useState(data?.expectedSalary || "");
  const [current, setCurrent] = useState(data?.currentSalary || "");
  const [about, setAbout] = useState(data?.about || "");
  const { loading, editJobSeeker } = useEditJobSeeker();

  async function handleSave() {
    await editJobSeeker({
      fullName,
      role,
      experience,
      skills,
      qualification,
      location,
      portfolio,
      languages,
      github,
      expected,
      current,
      about,
      id: data?._id,
    });
  }

  return (
    <div className="w-full flex items-center">
      <div className="bg-teal-300 p-5 rounded-lg flex flex-col items-center w-3/5 mx-auto">
        <h1 className="text-2xl">Edit Candidate</h1>
        <FormInput
          title={"Full Name"}
          type={"text"}
          value={fullName}
          onchange={(e) => setFullName(e.target.value)}
        />
        <FormInput
          title={"Role"}
          type={"text"}
          value={role}
          onchange={(e) => setRole(e.target.value)}
        />
        <FormSelect
          title={"Total Experience"}
          list={["fresher", "0-1", "1-2", "2-4", "4-6", ">6"]}
          value={experience}
          onchange={(e) => setExperience(e.target.value)}
        />
        <FormInput
          title={"Skills"}
          type={"text"}
          value={skills}
          onchange={(e) => setSkills(e.target.value)}
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
        <FormInput
          title={"Preferred Location"}
          type={"text"}
          value={location}
          onchange={(e) => setLocation(e.target.value)}
        />
        <FormInput
          title={"Portfolio"}
          type={"text"}
          value={portfolio}
          onchange={(e) => setPortFolio(e.target.value)}
        />
        <FormInput
          title={"Languages"}
          type={"text"}
          value={languages}
          onchange={(e) => setLanguages(e.target.value)}
        />
        <FormInput
          title={"Github"}
          type={"text"}
          value={github}
          onchange={(e) => setGithub(e.target.value)}
        />
        <FormInput
          title={"Expected Salary"}
          type={"Number"}
          value={expected}
          onchange={(e) => setExpected(e.target.value)}
        />
        <FormInput
          title={"Current Salary"}
          type={"Number"}
          value={current}
          onchange={(e) => setCurrent(e.target.value)}
        />
        <div className="form-row">
          <label className="form-label">About</label>
          <div className="flex items-center">
            <textarea
              className="w-full py-1 px-3 rounded-lg bg-teal-200 border border-gray-300 text-gray-900"
              rows={6}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 w-full">
          <Link
            to={`/job-portal/candidates/${data?._id}`}
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
