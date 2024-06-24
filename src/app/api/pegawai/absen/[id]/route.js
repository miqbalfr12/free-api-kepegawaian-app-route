import {filterDataById, retrieveDataById, updateData} from "@/services";

export async function GET(request, {params}) {
 const update = await updateData("kehadiran", params.id, {isScanned: true});
 console.log(update);
 const data = await retrieveDataById("kehadiran", params.id);
 const pegawai = await retrieveDataById("pegawai", data.pegawai);

 data.pegawai = pegawai;
 const ResponseInit = {status: 200, statusText: "OK"};
 return Response.json({...ResponseInit, message: data});
}
