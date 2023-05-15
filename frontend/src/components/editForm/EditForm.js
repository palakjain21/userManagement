import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";

export default function EditForm() {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("Enable");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8000/getUser/${params.id}`);
      setName(result.data[0].name);
      setEmail(result.data[0].email);
      setMobile(result.data[0].mobile_no);
      setStatus(result.data[0].status);
      setPhoto(result.data[0].photo);
    };
    fetchData();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      mobile_no: mobile,
      photo: photo.name,
      status: status,
    };
    console.log(data);

    try {
      const response = await axios.put(
        `http://localhost:8000/updateUser/${params.id}`,
        {
          data,
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
      return null;
    }
    navigate("/table");
  };

  return (
    <div className="w-full flex">
      <div className="w-2/5">
        <Sidebar />
      </div>
      <div className="w-3/5 flex items-center mx-96">
        <form className="flex flex-col justify-center">
          <div class="mb-6">
            <label for="name" class="text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label for="email" class="text-sm text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div class="mb-6">
            <label for="mobile no" class="text-sm text-gray-600">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobile no"
              placeholder="Enter your mobile number"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            />
          </div>

          <div className="col-span-full mb-4">
            <label
              htmlFor="photo"
              //   className="block text-sm leading-6 text-gray-900 shadow-sm"
              class="text-sm text-gray-600"
            >
              Photo
            </label>
            <div className="flex items-center gap-x-3">
              <UserCircleIcon
                className="h-16 w-16 text-gray-300"
                aria-hidden="true"
              />
              {/* <button
                type="button"
                // className="rounded-md bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                class="text-sm text-gray-600 rounded-md bg-white px-2.5 py-1.5 text-sm text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Upload
              </button> */}
              <input
                type="file"
                id="file"
                accept=".jpg"
                class="text-sm text-gray-600"
                onChange={(e) => setPhoto(e.target.files[0])}
                // value={photo}
              ></input>
            </div>
          </div>
          <div class="mb-6">
            <label for="mobile no" class="mt-4 text-sm text-gray-600">
              Status
            </label>
            <select
              id="status"
              name="status"
              //   className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option class="text-sm text-gray-600" value={"Enable"}>
                Enable
              </option>
              <option class="text-sm text-gray-600" value={"Disbale"}>
                Disable
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-12 rounded-md px-3 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-24 flex justify-center self-center h-10 dark:bg-gray-800"
            onClick={handleAddUser}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
