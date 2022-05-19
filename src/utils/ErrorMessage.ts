export interface IErrorParams {
    statusCode?:number, 
    message?:string
}

export const defaultError = (params: IErrorParams) => {
    return{
        status: params.statusCode || 404,
        message: params.message || 'Something went wrong'
    }
}