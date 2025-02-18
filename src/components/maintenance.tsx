import {FormEvent, useState} from 'react';

export default function Maintenance() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
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
    };

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
                                onChange={(e) => setEmail(e.target.value)}
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
