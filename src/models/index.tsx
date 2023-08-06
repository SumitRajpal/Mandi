export interface IUSERDETAILS  {
      user_id:string,
      pincode: string ,
      member: number,
      children: number,
      address_1: string,
      address_2: string,
      location: string,
      government_id: string,
      referral_id: string
}
export interface IUSERS {
      id:string,
      username:string
      email:string,
      phone:string,
      user_role:string,
      active:string,
      role_key: Array<string>,
      accessToken:string,
      user_details:IUSERDETAILS
}

export interface IUSERSARRAY extends Array<IUSERS> { }