import {retrieveData} from "@/services";

export const fetchCache = "force-no-store";

export async function GET() {
 const data = await retrieveData("pegawai");
 const ResponseInit = {
  status: 200,
  statusText: "OK",
 };
 return Response.json({...ResponseInit, message: data});
}
