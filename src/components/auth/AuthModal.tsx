import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

interface AuthModalProps {
  onLogin: (email: string, password: string) => void;
  onRegister: (name: string, email: string, password: string) => void;
}

export function AuthModal({ onLogin, onRegister }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white/95 backdrop-blur-sm rounded-lg p-8 max-w-md w-full shadow-2xl">
        {isLogin ? (
          <LoginForm
            onLogin={onLogin}
            onSwitchToRegister={() => setIsLogin(false)}
          />
        ) : (
          <RegisterForm
            onRegister={onRegister}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}
      </div>
    </div>
  );
}