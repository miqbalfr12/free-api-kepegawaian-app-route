import {retrieveData} from "@/services";

export const fetchCache = "force-no-store";

export async function GET() {
 const data = await retrieveData("pegawai");
 const ResponseInit = {
  status: 200,
  statusText: "OK",
  headers: {
   "Cache-Control": "public, s-maxage=1",
   "CDN-Cache-Control": "public, s-maxage=60",
   "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
  },
 };
 return Response.json({...ResponseInit, message: data});
}
