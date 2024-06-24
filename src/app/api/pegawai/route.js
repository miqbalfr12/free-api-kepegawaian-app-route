import {retrieveData} from "@/services";

export async function GET() {
 const data = await retrieveData("pegawai");
 console.log(data);
 const ResponseInit = {status: 200, statusText: "OK"};
 return Response.json({...ResponseInit, message: data});
}
