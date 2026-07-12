import {request, APIRequestContext} from '@playwright/test';


export async function isLinkBroken(requestContext: APIRequestContext, linkUrl: string): Promise<boolean> {
    try{
       const response = await requestContext.fetch(linkUrl, {method: 'HEAD'})
       return response.status()>=400;
    }catch(error){
        console.error(`Error checking link ${linkUrl}:`, error);
        return true; // Consider it broken if there's an error
    }
}