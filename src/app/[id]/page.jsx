"use client";
import {absenServices} from "@/services/services";
import React from "react";

const Home = ({params}) => {
 const [data, setData] = React.useState(false);
 console.log(params.id);

 React.useEffect(() => {
  const getData = async () => {
   const ress = await absenServices.absen(params.id);
   setData(ress.data);
  };

  if (!data) {
   console.log("getData");
   getData();
  }
 }, [data]);

 console.log(data);

 const toString = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
 };

 return (
  <div className="flex h-screen justify-center items-center">
   {data ? (
    <div className="flex flex-col text-center">
     <p>{data.message.pegawai.nama}</p>
     <p className="text-sm mb-4">{data.message.pegawai.jabatan}</p>
     <p>{data.message.status} Success!</p>
     <p className="text-sm">{toString(data.message.timestamp)}</p>
    </div>
   ) : (
    "Loading..."
   )}
  </div>
 );
};

export default Home;
