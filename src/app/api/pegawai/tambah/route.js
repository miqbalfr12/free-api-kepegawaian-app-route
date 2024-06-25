import {addData} from "@/services";

export async function POST(request) {
 const body = await request.json();
 console.log(body);
 const data = await addData("pegawai", body);
 const ResponseInit = {status: 200, statusText: "OK"};
 return Response.json({...ResponseInit, message: {...body, id: data.id}});
}
