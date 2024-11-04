'use client'

import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

interface User {
  username: string;
  password: string;
}

const testUser: User = { username: 'User', password: 'password' };

// Mock function to simulate API-based login validation and return token
const authenticateUser = async (username: string, password: string): Promise<{ success: boolean, token?: string }> => {
  if (username === testUser.username && password === testUser.password) {
    return { success: true, token: 'test-token' }; // Replace 'test-token' with a generated token in production
  }

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: data.success, token: data.token }; // Assumes API returns { success, token }
    }
  } catch (error) {
    console.error("Login error:", error);
  }
  return { success: false };
}

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { success, token } = await authenticateUser(username, password);
    if (success && token) {
      // Save token to localStorage or sessionStorage
      localStorage.setItem('token', token); // or sessionStorage.setItem('token', token);

      window.location.href = '/detail/dashboard';
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="p-4 h-screen w-screen flex overflow-hidden bg-gray-200">
      <section className="grid place-items-center w-full h-full">
        <div className="flex flex-col gap-[41px] w-[300px] h-[400px] shadow py-4 px-6 rounded-[10px] items-center justify-between bg-white">
          <div>
            <Image src="/images/logoBlue.svg" alt="Logo" width={130} height={100} className="px-3" />
          </div>

          <form onSubmit={handleLogin} className='flex flex-col gap-12'>
            <div className="w-full flex flex-col gap-6">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-[5px] outline-none text-black p-4 text-sm bg-gray-300 w-full h-[30px] transition-width duration-500 font-normal"
                placeholder="Username"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-[5px] outline-none text-black p-4 text-sm bg-gray-300 w-full h-[30px] transition-width duration-500 font-normal"
                placeholder="Password"
              />
              <div>
                <p className="text-red-500 text-[11px] text-center">{error || "    "}</p>
              </div>
            </div>

            <div className="w-full gap-1 flex flex-col items-center justify-center">
              <button
                type="submit"
                className="bg-[#0641B6] text-white p-1 rounded-[50px] w-full text-center cursor-pointer font-semibold"
              >
                Log In
              </button>

              <div className="font-semibold">or</div>

              <div className="bg-white border border-blue-700 text-black p-1 rounded-[50px] w-full text-center cursor-pointer font-normal flex items-center justify-center text-[14px] gap-3">
                <FcGoogle />
                Continue with Google
              </div>

              <div className="text-black text-[12px]">Forgot Password?</div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
