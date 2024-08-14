import React, { useEffect, useState } from "react";
import FormInput from "../../../FormInput";
import FormSelect from "../../../FormSelect";
import { Link } from "react-router-dom";
import useEditEmployer from "../../../../hooks/jobportal/useEditEmployer";
import Loading from "../../../Loading";

export default function EditEmployerSection({ data }) {
  const [founded, setFounded] = useState("");
  const [companyName, setCompanyName] = useState(data?.companyName || "");
  const [companyEmail, setCompanyEmail] = useState(data?.companyEmail || "");
  const [companyContact, setCompanyContact] = useState(
    data?.companyContact || ""
  );
  const [companyAddress, setCompanyAddress] = useState(
    data?.companyAddress || ""
  );
  const [state, setState] = useState(data?.state || "");
  const [country, setCountry] = useState(data?.country || "");
  const [industry, setIndustry] = useState(
    data?.industry || "Information Technology & Telecommunications"
  );
  const [facebook, setFacebook] = useState(data?.facebook || "");
  const [twitter, setTwitter] = useState(data?.twitter || "");
  const [linkedin, setLinkedin] = useState(data?.linkedin || "");
  const [website, setWebsite] = useState(data?.website || "");
  const [size, setSize] = useState(data?.size || "10-50");
  const [about, setAbout] = useState(data?.about || "");
  const { loading, editEmployer } = useEditEmployer();

  useEffect(() => {
    if (data && data.founded) {
      const formatedDate = new Date(data.founded);
      const dateToShow = formatedDate.toISOString().split("T")[0];
      setFounded(dateToShow);
    }
  }, []);

  async function handleSave() {
    await editEmployer({
      founded,
      companyName,
      companyEmail,
      companyContact,
      companyAddress,
      state,
      country,
      industry,
      facebook,
      twitter,
      linkedin,
      website,
      size,
      about,
      id: data?._id,
    });
  }

  return (
    <div className="w-full flex items-center">
      <div className="bg-teal-300 p-5 rounded-lg flex flex-col items-center w-3/5 mx-auto">
        <h1 className="text-2xl">Edit Employer</h1>
        <FormInput
          title={"Company Name"}
          type={"text"}
          value={companyName}
          onchange={(e) => setCompanyName(e.target.value)}
        />
        <FormInput
          title={"Company Email"}
          type={"email"}
          value={companyEmail}
          onchange={(e) => setCompanyEmail(e.target.value)}
        />
        <FormInput
          title={"Company Contact"}
          type={"text"}
          value={companyContact}
          onchange={(e) => setCompanyContact(e.target.value)}
        />
        <FormInput
          title={"Company Address"}
          type={"text"}
          value={companyAddress}
          onchange={(e) => setCompanyAddress(e.target.value)}
        />
        <FormInput
          title={"Founded"}
          type={"date"}
          value={founded}
          onchange={(e) => setFounded(e.target.value)}
        />
        <FormInput
          title={"State"}
          type={"text"}
          value={state}
          onchange={(e) => setState(e.target.value)}
        />
        <FormInput
          title={"Country"}
          type={"text"}
          value={country}
          onchange={(e) => setCountry(e.target.value)}
        />
        <FormSelect
          title={"Industry"}
          list={[
            "Information Technology & Telecommunications",
            "Finance & Insurance",
            "Healthcare & Pharmaceuticals",
            "Education & Training",
            "Engineering & Manufacturing",
            "Construction & Real Estate",
            "Retail, Wholesale & E-commerce",
            "Hospitality, Travel & Tourism",
            "Media, Entertainment & Arts",
            "Government, Non-Profit & Public Services",
          ]}
          value={industry}
          onchange={(e) => setIndustry(e.target.value)}
        />
        <FormInput
          title={"Facebook"}
          type={"text"}
          value={facebook}
          onchange={(e) => setFacebook(e.target.value)}
        />
        <FormInput
          title={"Linkedin"}
          type={"text"}
          value={linkedin}
          onchange={(e) => setLinkedin(e.target.value)}
        />
        <FormInput
          title={"Twitter"}
          type={"text"}
          value={twitter}
          onchange={(e) => setTwitter(e.target.value)}
        />
        <FormInput
          title={"Website"}
          type={"text"}
          value={website}
          onchange={(e) => setWebsite(e.target.value)}
        />

        <FormSelect
          title={"Size"}
          list={["10-50", "50-100", "100-200", "200-400", "400-800", ">800"]}
          value={size}
          onchange={(e) => setSize(e.target.value)}
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
            to={`/job-portal/employers/${data?._id}`}
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
