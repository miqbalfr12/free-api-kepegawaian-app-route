import {deleteData} from "@/services";

export async function DELETE(request, {params}) {
 console.log(params);
 const data = await deleteData("pegawai", params.id);
 const ResponseInit = {status: 200, statusText: "OK"};
 return Response.json({...ResponseInit, message: data});
}
