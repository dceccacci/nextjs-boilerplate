import { type NextRequest } from 'next/server'

import {fetchSomeExamples} from "@/services/exampleServices"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get('limit') ?? "10");
  let data = await fetchSomeExamples(limit);
  return Response.json(data);
}
