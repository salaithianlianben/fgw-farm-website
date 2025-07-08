import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface IconDropdownProps {
  trigger?: React.ReactNode;
  items: DropdownItem[];
  value?: DropdownItem | null;
  placeholder?: string;
  onSelectValue: (v: DropdownItem) => void;
}

const LanguageDropdown: React.FC<IconDropdownProps> = ({
  trigger,
  items,
  value = null,
  placeholder = "Select an option",
  onSelectValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    DropdownItem | null | undefined
  >(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled) {
      setSelectedItem(item);
      setIsOpen(false);
      onSelectValue(item);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (value) {
      setSelectedItem(value);
    }
  }, [value]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex w-full items-center justify-between gap-x-1 rounded-lg px-2 py-1 text-sm font-medium text-gray-700 shadow-xs transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <div className="flex items-center gap-x-2">
            {selectedItem ? (
              <>
                {selectedItem.icon}
                <span>{selectedItem.label}</span>
              </>
            ) : (
              <span className="text-gray-500">{placeholder}</span>
            )}
          </div>
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="animate-in fade-in-0 zoom-in-95 ring-opacity-5 absolute right-0 z-10 mt-2 origin-top-right rounded-lg shadow-lg ring-1 ring-black duration-200 focus:outline-hidden">
          <div className="py-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
                className={`group flex w-full items-center gap-x-1 px-2 py-1 text-sm transition-colors duration-150 ${
                  item.disabled
                    ? "cursor-not-allowed text-gray-400"
                    : "hover:bg-opacity-90 focus:bg-opacity-50 focus:outline-hidden"
                }`}
              >
                <span
                  className={`shrink-0 ${
                    item.disabled
                      ? "text-gray-300"
                      : "text-gray-500 group-hover:text-gray-700"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="flex-1 text-left">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
