import React, { useState } from 'react';
import { SignIn, SignUp, useUser } from '@clerk/clerk-react';

const Login = ({ setIsLoggedIn, setCurrentPage }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { isSignedIn } = useUser();

  // If user is signed in, redirect to home
  React.useEffect(() => {
    if (isSignedIn) {
      setIsLoggedIn(true);
      setCurrentPage('home');
    }
  }, [isSignedIn, setIsLoggedIn, setCurrentPage]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <svg className="h-12 w-12 text-blue-800" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z" stroke="#1e40af" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isSignUp ? 'Create your account' : 'Sign in to your account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            {isSignUp ? 'Sign in' : 'Sign up'}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isSignUp ? (
            <SignUp 
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200',
                  card: 'shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  socialButtonsBlockButton: 'border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50',
                  formFieldInput: 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500',
                  footerActionLink: 'text-blue-600 hover:text-blue-500 font-medium'
                }
              }}
            />
          ) : (
            <SignIn 
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200',
                  card: 'shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  socialButtonsBlockButton: 'border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50',
                  formFieldInput: 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500',
                  footerActionLink: 'text-blue-600 hover:text-blue-500 font-medium'
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
