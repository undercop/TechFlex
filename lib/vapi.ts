import Vapi from "@vapi-ai/web"

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!); // or instead ! we can type cast it to as string (it will make the api string defined)