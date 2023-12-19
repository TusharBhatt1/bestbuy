import React from 'react';
import { IconType } from 'react-icons';

interface InputProps {
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: 'text' | 'number' | 'tel' | 'radio';
  name?: string;
  value?: string;
  checked?: boolean;
  isError?: boolean;
  icon?: IconType; // Updated to include an optional icon
}

export default function Input({
  label,
  isError,
  checked,
  icon,
  name,
  type,
  value,
  placeholder,
  onChange,
  required,
}: InputProps) {
  return (
    <div className='mb-4 flex justify-center items-center mt-4 gap-10'>
      <label className='block text-center mt-4 mb-1'>{label}</label>
      <div className='relative'>
        {icon && (
          <div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
            {React.createElement(icon, { size: 20, color: isError ? 'red' : 'gray' })}
          </div>
        )}
        <input
          className={`
            ${icon ? 'pl-10' : 'pl-4'}
            ${isError ? 'border-red-400' : 'border-slate-500'}
            w-full py-2
            text-gray-500 border rounded-md outline-none
            bg-gray-50 focus:bg-white focus:border-indigo-600
          `}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          required={required}
          placeholder={placeholder}
        />
        <div className='absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition-transform origin-left transform scale-x-0'></div>
      </div>
    </div>
  );
}
