import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${assets.heroImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md px-6 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
        {/* Blur Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <img 
              src={assets.logo} 
              alt="Compassora Logo" 
              className="h-16 mx-auto mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 opacity-0 -translate-y-5 animate-[slideDown_0.6s_ease-out_forwards]">
              Welcome Back
            </h1>
            <p className="text-white/70 text-sm opacity-0 -translate-y-5 animate-[slideDown_0.6s_ease-out_0.1s_forwards]">
              Sign in to continue your adventure
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative opacity-0 translate-y-5 animate-[slideUp_0.6s_ease-out_0.2s_forwards]">
              <label className="block text-white/90 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50 transition-all duration-300"
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="relative opacity-0 translate-y-5 animate-[slideUp_0.6s_ease-out_0.3s_forwards]">
              <label className="block text-white/90 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50 transition-all duration-300"
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm opacity-0 translate-y-5 animate-[slideUp_0.6s_ease-out_0.4s_forwards]">
              <label className="flex items-center text-white/70 cursor-pointer hover:text-white transition-colors">
                <input type="checkbox" className="mr-2 rounded" />
                Remember me
              </label>
              <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(10,149,72,0.6)] opacity-0 translate-y-5 animate-[slideUp_0.6s_ease-out_0.5s_forwards]"
              style={{ backgroundColor: '#0A9548' }}
            >
              Sign In
            </button>

            {/* Register Link */}
            <div className="text-center text-white/70 text-sm opacity-0 translate-y-5 animate-[slideUp_0.6s_ease-out_0.6s_forwards]">
              Don't have an account?{' '}
              <a href="#" className="text-green-400 hover:text-green-300 font-semibold transition-colors">
                Sign Up
              </a>
            </div>
          </form>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6 opacity-0 translate-y-5 animate-[slideUp_0.6s_ease-out_0.9s_forwards]">
          <button 
            onClick={() => navigate('/')}
            className="text-white/70 hover:text-white text-sm transition-colors inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login