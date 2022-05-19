
export const defaultError = (statusCode?:number, message?:string) => {
    return{
        status: statusCode || 404,
        message: message || 'Something went wrong'
    }
}