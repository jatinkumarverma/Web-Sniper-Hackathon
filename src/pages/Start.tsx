import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { HiMapPin } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import Image from "next/image";
import Darkheader from "@/components/Darkheader";


type FormValues = {
  location: string;
  
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      location: ""
    },
  });

  register("location", { required: "Pick a destination" });

  console.log("errors", errors);
  const [show, setShow] = useState(false);

  return (
    <>
      <main className="min-h-screen p-20 flex justify-center items-center">
        <Darkheader />

        {/* image */}
        {show ? (
          <div className="flex justify-center items-center p-14 h-[30rem] text-slate-700 shadow-lg">
            <div className="flex flex-col h-full justify-between">
              <div className="">
                <h1 className="text-2xl font-semibold my-2">
                  Thank you for choosing us to be your travel companion
                </h1>
                <p>
                  We will notify you regarding your schedule as soon as possible
                </p>
                <p>Hope you enjoy your experience with us</p>
              </div>
              <div>
                <p className="">With regard,</p>
                <div className="flex items-center gap-x-2">
                  <h3 className="text-xl font-bold">Travel</h3>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center mx-auto mb-4 lg:p-20 shadow-lg">
            <form
              onSubmit={handleSubmit((data: FormValues) => {
                console.log(data);
                setShow(true);
                reset();
              })}
              className="flex flex-col gap-y-1 min-w-[500px]"
            >
              <h1 className="text-4xl font-bold">Where to go</h1>
              <p className="text-slate-600 my-2">
                Tell us where would you wanna go...
              </p>
              <div className="flex items-center gap-x-4 border rounded-lg shadow">
                <div className="flex items-center gap-2 px-6">
                  <HiMapPin />
                  <p>Location</p>
                </div>

                <input
                  type="search"
                  {...register("location")}
                  className="px-4 py-2 grow bg-slate-50 rounded-lg border-l focus:outline-none focus:ring-2 focus:ring-emerald-900"
                />
              </div>
              <p className="text-sm ml-40 text-red-600">
                {errors.location?.message}
              </p>
              <div>
                {/* <Dropdown
                name="transport"
                register={register}
                label="Transport"
                opt1="Plane"
                opt2="Train"
                opt3="Ship"
              /> */}
                
                
              </div>
              
                
              
              <input
                type="submit"
                value="Search"
                className="px-4 py-2 rounded-lg shadow my-4 bg-emerald-900 text-slate-100 font-semibold cursor-pointer"
              />
            </form>
          </div>
        )}
        {/* </section> */}
      </main>
    </>
  );
}
