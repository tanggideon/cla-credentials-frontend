"use client"

import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  selectedValue?: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  placeholder = 'Select an option',
  onChange,
  selectedValue,
}) => {
  return (
    <div className="relative w-full max-w-sm">
      <select
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        value={selectedValue || ''}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
