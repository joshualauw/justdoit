import * as yup from "yup";

export const createUserSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
    password_confirmation: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "password doesn't match"),
});

export type ICreateUser = yup.InferType<typeof createUserSchema>;
