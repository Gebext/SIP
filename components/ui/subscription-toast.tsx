import { useState, useEffect } from "react";
import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast";
import { X } from "lucide-react";

const slideInAnimation = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const slideOutAnimation = `
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;

const pulseAnimation = `
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

interface SubscriptionToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export function SubscriptionToast({
  message,
  duration = 3000,
  onClose,
}: SubscriptionToastProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(onClose, 500); // Wait for the slide out animation to complete
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <ToastProvider>
      <style>
        {slideInAnimation}
        {slideOutAnimation}
        {pulseAnimation}
      </style>
      <Toast
        className={`
          bg-white text-black border-2 border-black p-4 rounded-lg shadow-lg
          ${isClosing ? "animate-slide-out" : "animate-slide-in"}
          transition-all duration-300 ease-in-out
        `}
        style={{
          animation: `${
            isClosing ? "slideOut" : "slideIn"
          } 0.5s ease-in-out, pulse 2s infinite`,
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-black text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p className="text-sm font-bold">{message}</p>
          </div>
          <button
            onClick={() => {
              setIsClosing(true);
              setTimeout(onClose, 500);
            }}
            className="ml-4 text-black hover:bg-black hover:text-white rounded-full p-1 transition-colors duration-200"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </Toast>
      <ToastViewport className="fixed bottom-4 right-4 flex flex-col gap-2 w-full max-w-sm z-50" />
    </ToastProvider>
  );
}
