import strapiClient from "@/helper/apiClient";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
    
      const { email } = await request.json();
  
      
      const jwtToken = process.env.JWT_ADMIN;  
  
      if (!jwtToken) {
        return NextResponse.json({ error: 'Missing JWT token' }, { status: 401 });
      }
  
      
      const response = await strapiClient.post(
        '/emails',  
        {
          data: { email }
        },
      );
  
      return NextResponse.json(response.data); 
    } catch (error) {
      return NextResponse.json({ error: (error as AxiosError).message }, { status: 500 });
    }
  }