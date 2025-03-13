import {redirect} from 'next/navigation';

/**
 * Represents a function that handles scenarios where a requested resource is not found.
 * Redirects the user to the root URL of the application.
 */
export default function NotFound() {
    redirect('/');
}
