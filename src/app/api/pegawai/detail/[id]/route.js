import {filterDataById, retrieveDataById} from "@/services";

export async function GET(request, {params}) {
 console.log(params);
 const data = await retrieveDataById("pegawai", params.id);
 const kehadiran = await filterDataById("kehadiran", params.id);

 kehadiran.map((kehadiran) => {
  delete kehadiran.pegawai;
 });

 data.kehadiran = kehadiran.sort((a, b) => a.timestamp - b.timestamp);
 const ResponseInit = {status: 200, statusText: "OK"};
 return Response.json({...ResponseInit, message: data});
}
