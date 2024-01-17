import * as yup from "yup";

export const signInUserSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
});

export type ISignInUser = yup.InferType<typeof signInUserSchema>;
