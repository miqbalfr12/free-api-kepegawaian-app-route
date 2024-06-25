import {updateData} from "@/services";

export async function PUT(request, {params}) {
 console.log(params);
 const body = await request.json();
 console.log(body);
 const data = await updateData("pegawai", params.id, body);
 if (data) {
  const ResponseInit = {status: 200, statusText: "OK"};
  return Response.json({...ResponseInit, message: data});
 } else {
  const ResponseInit = {status: 500, statusText: "Internal Server Error"};
  return Response.json({...ResponseInit, message: data});
 }
}
