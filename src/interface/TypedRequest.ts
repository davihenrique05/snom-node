import { Request } from "express";
import { Query } from "express-serve-static-core";

export interface TypedRequestQuery <T extends Query> extends Request {
    query: T
}

export interface TypedRequestBody <T> extends Request {
    body: T
}

export interface TypedRequestQueryBody<T extends Query, U> extends Request {
    query: T,
    body: U
}