import React from 'react';

interface InputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  icon?: string | React.ReactNode
  isError?: boolean
  inputMode?: 'text' | 'numeric' | 'decimal' | 'email' | 'tel'
  className?: string
}

const TextareaInput: React.FC<InputProps> = ({ label, placeholder, value, onChange, icon, isError, inputMode, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block mb-1">{label}</label>

      <div className='flex flex-row items-stretch '>
        {icon ?
          <div className='px-2 py-1 border border-gray-400 border-r-0 bg-gray-200 rounded-tl-sm rounded-bl-sm'>
            <span className='font-semibold text-sm text-gray-800'>{icon}</span>
          </div>
        : null}
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          inputMode={inputMode}
          rows={6}
          className={`${icon ? 'rounded-tr-sm rounded-br-sm' : 'rounded-sm'} ${isError ? 'border-red-400 border-2' : 'border-gray-400 focus:border-gray-500 border'} w-full py-2 px-3 text-gray-700 leading-tight outline-none resize-none`}
        >

        </textarea>
      </div>
    </div>
  );
};

export default TextareaInput;