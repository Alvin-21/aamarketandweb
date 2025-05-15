'use client';

import { sendEmail, State } from "@/lib/actions";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, Input, Textarea } from "@heroui/react";
import React, { startTransition, useActionState } from "react";

export default function ContactForm() {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction, loading] = useActionState(sendEmail, initialState);
    const [showAlert, setShowAlert] = React.useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        startTransition(() => {
            formAction(formData);
            setShowAlert(true);
        });

        if (state?.message === "success") {
            e.currentTarget.reset();
        }
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-5 mt-8 max-w-lg mx-auto">
            <Alert
                variant="solid"
                isClosable
                className="max-w-xl mx-auto"
                isVisible={showAlert}
                onClose={() => setShowAlert(false)}
                color={
                    state?.message === "success" ? "success" : "danger"
                }
                description={
                    state?.message === "success"
                        ? "Your message has been sent successfully."
                        : "There was an error sending your message. Please try again."
                }
                title={
                    state?.message === "success" ? "Success" : "Error"
                }
                hideIconWrapper
            />
            <div>
                <Input
                    id="fullName"
                    name="fullName"
                    label="Name"
                    type="text"
                    variant="bordered"
                    size="lg"
                    classNames={{
                        label: [
                            "text-lg text-blue-50 group-data-[filled-within=true]:text-blue-50",
                        ],
                        inputWrapper: [
                            "focus-within:!border-slate-500",
                        ],
                        input: [
                            "text-lg",
                        ],
                    }}
                />
                <div id="fullName-error" aria-live="polite" aria-atomic="true">
                    {state?.errors?.fullName &&
                        state.errors.fullName.map((error: string) => (
                            <p className="mt-2 text-sm text-rose-200" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            </div>
            <div>
                <Input
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    variant="bordered"
                    size="lg"
                    classNames={{
                        label: [
                            "text-lg text-blue-50 group-data-[filled-within=true]:text-blue-50",
                        ],
                        inputWrapper: [
                            "focus-within:!border-slate-500",
                        ],
                        input: [
                            "text-lg",
                        ],
                        errorMessage: [
                            "text-rose-200 text-sm",
                        ],
                    }}
                />
                <div id="email-error" aria-live="polite" aria-atomic="true">
                    {state?.errors?.email &&
                        state.errors.email.map((error: string) => (
                            <p className="mt-2 text-sm text-rose-200" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            </div>
            <div>
                <Textarea
                    id="message"
                    name="message"
                    label="Message"
                    type="text"
                    variant="bordered"
                    minRows={3}
                    isClearable
                    classNames={{
                        label: [
                            "text-lg text-blue-50  group-data-[filled-within=true]:text-blue-50",
                        ],
                        inputWrapper: [
                            "focus-within:!border-slate-500",
                        ],
                        input: [
                            "text-lg",
                        ],
                    }}
                />
                <div id="message-error" aria-live="polite" aria-atomic="true">
                    {state?.errors?.message &&
                        state.errors.message.map((error: string) => (
                            <p className="mt-2 text-sm text-rose-200" key={error}>
                                {error}
                            </p>
                        ))}
                </div>
            </div>
            <div className="flex justify-center">
                <Button type="submit" className="w-1/2 text-lg font-semibold bg-slate-300" isLoading={loading}>
                    Send
                    <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
                </Button>
            </div>
        </form>
    );
}