import {ChangeEvent, FormEvent, useCallback, useState} from 'react';

/**
 * The `Maintenance` component displays a notification about an ongoing application update.
 * It includes a subscription form where users can enter their email address
 * to receive a notification once the update is complete.
 * Handles the email submission process and displays success or error messages based on the operation result.
 */
export default function Maintenance() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    /**
     * A callback function for handling changes in the email input field.
     * It updates the email state with the current value of the input.
     */
    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    /**
     * A callback function to handle form submission.
     * Prevents the default form submission behavior and sends a POST request to subscribe the user with the provided email.
     * Handles errors and updates the submission and error state accordingly.
     *
     * @callback handleSubmit
     * @param {FormEvent} e - The form event triggered on submission.
     * @returns {Promise<void>} A promise that resolves when the submission process completes.
     */
    const handleSubmit = useCallback(async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });

            if (response.ok) {
                setSubmitted(true);
            }

            setError('Something went wrong. Please try again.');
        } catch {
            setError('Something went wrong. Please try again.');
        }
    }, [email]);

    return (
        <div className="container mx-auto p-4 font-text">
            <div className="flex flex-col items-center justify-center p-4">
                <div className="bg-base-200 p-8 rounded-lg shadow-lg text-center max-w-md">
                    <h1 className="text-2xl font-bold mb-4">Update incoming! 😱</h1>
                    <p className="mb-4">
                        The Combat Rework Update is live! 🍾
                    </p>
                    <p className="mb-4">
                        It&#39;s going to take me a while to adapt the app to the new system 😅
                    </p>
                    <p className="mb-8">
                        Thank you for your patience 🙇‍♀️
                    </p>
                    <p className="mb-4">
                        If you want to be notified when the update is ready,
                        please enter your email below:
                    </p>
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4" method="POST">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                                className="input input-bordered w-full"
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                Notify Me
                            </button>
                            {error && <p className="text-error">{error}</p>}
                        </form>
                    ) : (
                        <p className="text-success">Thank you! You will receive an email when the app is up to date.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
