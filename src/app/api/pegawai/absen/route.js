import {addData, filterDataById, retrieveDataById} from "@/services";

export async function POST(request) {
 const body = await request.json();
 console.log(body.id);

 const newData = {
  isScanned: false,
  pegawai: body.id,
  status: body.status,
  timestamp: Date.now(),
 };

 const pegawai = await retrieveDataById("pegawai", body.id);

 console.log(newData);

 const ress = await addData("kehadiran", newData);
 console.log(ress.id);
 const ResponseInit = {status: 200, statusText: "OK"};
 newData.pegawai = pegawai;
 return Response.json({...ResponseInit, message: {...newData, id: ress.id}});
}
