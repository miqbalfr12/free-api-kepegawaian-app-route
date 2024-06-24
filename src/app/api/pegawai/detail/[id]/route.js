import {filterDataById, retrieveDataById} from "@/services";

export async function GET(request, {params}) {
 console.log(params);
 const data = await retrieveDataById("pegawai", params.id);
 const kehadiran = await filterDataById("kehadiran", params.id);

 kehadiran.map((kehadiran) => {
  delete kehadiran.pegawai;
 });
 console.log(kehadiran);

 data.kehadiran = kehadiran;
 const ResponseInit = {status: 200, statusText: "OK"};
 return Response.json({...ResponseInit, message: data});
}
