"use client";


import { Button, FieldError, Form, Input, Label, TextField, InputGroup } from "@heroui/react";
import { useState } from "react";
import { FaCheck, FaEye, FaRegEyeSlash } from "react-icons/fa";



const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("submit data", userData);

        // const { data, error } = await authClient.signIn.email({
        //     email: userData.email,
        //     password: userData.password,
        //     rememberMe: true,
        //     callbackURL: "/homepage",

        // });
        // console.log("submit ", { data, error });
    }
    return (
        <div>
            <h1 className="text-center font-bold text-green-500 m-6">Please sign In</h1>

            <div className="flex justify-center items-center border-2 border-green-300 rounded-2xl m-28 p-16 ">

                <Form
                    className="flex w-96 flex-col gap-4"
                    onSubmit={onSubmit}>



                    {/* email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <div><Label>Email</Label></div>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    {/* password */}
                    <TextField className="w-full max-w-[280px]" name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full max-w-[280px]"
                                type={isVisible ? "text" : "password"}
                                name="password"
                                placeholder="Your password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ?
                                        <FaEye className="size-4" /> :
                                        <FaRegEyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>
                    <div className="flex  gap-2">
                        <Button fullWidth>Primary Button</Button>

                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;