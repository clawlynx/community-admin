import React, { useEffect, useState } from "react";
import FormInput from "../../FormInput";
import FormSelect from "../../FormSelect";
import { Link } from "react-router-dom";

export default function EditUserSection({ data }) {
  const [age, setAge] = useState(data?.age || "");
  const [dateOfBirth, setDateOfBirth] = useState(data?.dateOfBirth || "");
  const [email, setEmail] = useState(data?.email || "");
  const [phone, setPhone] = useState(data?.phone || "");
  const [username, setUsername] = useState(data?.username || "");
  const [hobbies, setHobbies] = useState(data?.hobbies || "");
  const [interest, setInterest] = useState(data?.interest || "");
  const [gender, setGender] = useState(data?.gender || "Male");
  const [smoking, setSmoking] = useState(data?.smoking || "Often");
  const [drinking, setDrinking] = useState(data?.drinking || "Often");
  const [address, setAddress] = useState(data?.address || "");
  const [highestQualification, setHighestQualification] = useState(
    data?.highestQualification || "High School"
  );

  useEffect(() => {
    if (data && data.dateOfBirth) {
      const formatedDate = new Date(data.dateOfBirth);
      const dateToShow = formatedDate.toISOString().split("T")[0];
      setDateOfBirth(dateToShow);
    }
  }, []);
  return (
    <div className="w-full flex items-center">
      <div className="bg-teal-300 p-5 rounded-lg flex flex-col items-center w-3/5 mx-auto">
        <h1 className="text-2xl">Edit User</h1>
        <FormInput
          title={"Username"}
          type={"text"}
          value={username}
          onchange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          title={"Age"}
          type={"Number"}
          value={age}
          onchange={(e) => setAge(e.target.value)}
        />
        <FormInput
          title={"Date of Birth"}
          type={"date"}
          value={dateOfBirth}
          onchange={(e) => setDateOfBirth(e.target.value)}
        />
        <FormInput
          title={"Email"}
          type={"email"}
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          title={"Address"}
          type={"text"}
          value={address}
          onchange={(e) => setAddress(e.target.value)}
        />
        <FormInput
          title={"Phone"}
          type={"text"}
          value={phone}
          onchange={(e) => setPhone(e.target.value)}
        />
        <FormSelect
          title={"Highest Qualification"}
          list={[
            "High School",
            "Higher Secondary",
            "Diploma",
            "Bachelors Degree",
            "Masters Degree",
            "Doctorate",
          ]}
          value={highestQualification}
          onchange={(e) => setHighestQualification(e.target.value)}
        />
        <FormSelect
          title={"Gender"}
          list={["Male", "Female"]}
          value={gender}
          onchange={(e) => setGender(e.target.value)}
        />
        <FormInput
          title={"Hobbies"}
          type={"text"}
          value={hobbies}
          onchange={(e) => setHobbies(e.target.value)}
        />
        <FormInput
          title={"Interest"}
          type={"text"}
          value={interest}
          onchange={(e) => setInterest(e.target.value)}
        />
        <FormSelect
          title={"Smoking"}
          list={["Often", "Occational", "Never"]}
          value={smoking}
          onchange={(e) => setSmoking(e.target.value)}
        />
        <FormSelect
          title={"Drinking"}
          list={["Often", "Occational", "Never"]}
          value={drinking}
          onchange={(e) => setDrinking(e.target.value)}
        />
        <div className="flex justify-end gap-3 w-full">
          <Link
            to={`/all-users/${data?._id}`}
            className="px-3 py-2 bg-teal-200 rounded-lg hover:bg-teal-100 nav-link"
          >
            Cancel
          </Link>
          <button className="px-3 py-2 bg-teal-400 rounded-lg hover:bg-teal-500 nav-link">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
