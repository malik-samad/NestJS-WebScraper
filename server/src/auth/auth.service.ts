import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signin(){
        return "signing in...";
    }

    signup(){
        return "signing up...";
    }
}