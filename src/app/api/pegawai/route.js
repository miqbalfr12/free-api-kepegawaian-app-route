import {retrieveData} from "@/services";

export async function GET() {
 const data = await retrieveData("pegawai");
 const ResponseInit = {
  status: 200,
  statusText: "OK",
  headers: {
   "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  },
 };
 return Response.json({...ResponseInit, message: data});
}
