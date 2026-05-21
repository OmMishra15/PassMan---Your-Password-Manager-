import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [form, setform] = useState({ URL: "", username: "", Password: "" });
  const [passwordsarray, setpasswordsarray] = useState([]);
  const ref = useRef();
  const passref = useRef();

  async function getpasswords(){
    let request=await fetch(`${import.meta.env.VITE_BACKEND_URL}/`)
    let passwords = await request.json()
    console.log(passwords)
    setpasswordsarray(passwords);
    
  }

  useEffect(() => {
    getpasswords()
  }, []);

  const showpassword = () => {
    if (ref.current.src.includes("https://cdn.lordicon.com/uvofdfal.json")) {
      ref.current.src = "https://cdn.lordicon.com/ebyacdql.json";
      passref.current.type = "text";
    } else {
      ref.current.src = "https://cdn.lordicon.com/uvofdfal.json";
      passref.current.type = "password";
    }
  };

  async function addpassword() {
    if ((form.URL == ""|| form.Password == ""|| form.username == "")) {
      toast("ADD YOUR DETAILS FIRST");
    } else {
      toast("Password Saved Succesfully");
      const newpassord={...form, id: form.id? form.id : uuidv4()}
      setpasswordsarray([...passwordsarray, newpassord]);
      
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: form.id }),
      });

      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newpassord),
      });

      console.log([...passwordsarray, form]);
      setform({ URL: "", username: "", Password: "" });
    }
  }

  function handlechange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  function copytext(text) {
    toast("Copied to Clipboard");
    navigator.clipboard.writeText(text);
  }

  async function deleteitem(id) {
    toast("Password Deleted Succcesfully");
    let c = confirm("Do you want to delete");
    if (c) {
      setpasswordsarray(passwordsarray.filter((item) => item.id != id));
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      console.log([...passwordsarray, form]);
    }
  }

  function edititem(id) {
    setform({...passwordsarray.filter((i) => i.id == id)[0], id:id});
    setpasswordsarray(passwordsarray.filter((item) => item.id != id));
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div className=" mx-auto text-amber-50 md:mycontainer md:p:6 p-2 md:w-full ">
        <div className="flex flex-col items-center m-5 gap-2">
          <h1 className="text-4xl text font-bold text-center text-green-950">
            &lt;\ PassMan /&gt;
          </h1>
          <p className="text-emerald-800 text-2xl font-medium">
            Your Manager Of Passwords
          </p>
        </div>
        <div className=" text-black flex flex-col p-4 gap-3 items-center max-md:flex-col">
          <input
            className="rounded-full border border-emerald-900 w-full py-1 px-3"
            type="text"
            placeholder="Enter your Website URL"
            name="URL"
            id=""
            value={form.URL}
            onChange={handlechange}
          />
          <div className="flex max-md:flex-col max-md:w-full mt-3 justify-center gap-5">
            <input
              className="rounded-full border border-emerald-900 py-1 px-3 w-2xs max-md:w-full"
              type="text"
              placeholder="Enter Your Username"
              name="username"
              id=""
              value={form.username}
              onChange={handlechange}
            />
            <div className="relative ">
              <input
                className="rounded-full border border-emerald-900 py-1 px-3 max-md:w-full w-2xs"
                type="password"
                placeholder="Enter your Password"
                name="Password"
                id=""
                value={form.Password}
                onChange={handlechange}
                ref={passref}

              />
              <span className="absolute right-3 top-0">
                <lord-icon
                  src="https://cdn.lordicon.com/uvofdfal.json"
                  trigger="hover"
                  className="cursor-pointer"
                  onclick={showpassword}
                  ref={ref}
                ></lord-icon>
              </span>
            </div>
          </div>
          <button
            onClick={addpassword}
            className="button flex bg-emerald-500 hover:bg-emerald-400 justify-center items-center gap-3 rounded-full py-2 w-50"
          >
            Add Password
            <lord-icon
              src="https://cdn.lordicon.com/gzqofmcx.json"
              trigger="hover"
            ></lord-icon>
          </button>
        </div>
      </div>
      <div className="display flex flex-col justify-center items-center w-full overflow-x-auto mb-20 max-md:w-full">
        <h1 className="font-bold text-2xl py-2">Your Passwords</h1>
        {passwordsarray.length === 0 && (
          <div className="text text-red-600">No Passwords to Show. Add One</div>
        )}
        {passwordsarray.length != 0 && (
          <table className="table-auto rounded-md overflow-hidden w-full max-md:w-full">
            <thead className="bg-emerald-700 font-bold ">
              <tr>
                <th className="py-2 text-center">URL</th>
                <th className="py-2 text-center">Username</th>
                <th className="py-2 text-center">Password</th>
                <th className="py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {passwordsarray.map((element, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2 flex justify-center items-center gap-2">
                      <a href={element.URL} target="_blank">{element.URL}</a>
                      <div>
                        <img
                          src="icons/copy.svg"
                          alt=""
                          className="cursor-pointer"
                          onClick={() => copytext(element.URL)}
                        />
                      </div>
                    </td>
                    <td className="py-2">
                      <div className="py-2 flex justify-center items-center gap-2">
                        {element.username}
                        <div>
                          <img
                            src="icons/copy.svg"
                            alt=""
                            className="cursor-pointer"
                            onClick={() => copytext(element.username)}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2">
                      <div className="py-2 flex justify-center items-center gap-2">
                        {"*".repeat(element.Password.length)}
                        <div>
                          <img
                            src="icons/copy.svg"
                            alt=""
                            className="cursor-pointer"
                            onClick={() => copytext(element.Password)}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2">
                      <div className="py-2 flex justify-center items-center gap-2">
                        <img
                          src="icons/edit.svg"
                          alt=""
                          className="cursor-pointer"
                          onClick={() => edititem(element.id)}
                        />
                        <lord-icon
                          src="https://cdn.lordicon.com/oqeixref.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                          onClick={() => deleteitem(element.id)}
                        ></lord-icon>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Manager;
