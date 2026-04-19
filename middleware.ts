
import { withAuth } from 'next-auth/middleware';

export default withAuth;

export const config ={
    //*: zero or more
    //+:one or more 
    //?:zero or one
    matcher: ['/users/:path*', '/upload/:path*']
}