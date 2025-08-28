import React, { useState, useRef } from 'react'

function processPhoneInput(str: string) {
  let res = str.replace(/\D/g, "").slice(0, 10);
  if (res.length > 6) {
    res = res.slice(0, 6) + "-" + res.slice(6);
  }
  if (res.length > 3) {
    res = "(" + res.slice(0, 3) + ")" + res.slice(3);
  }
  return res;
}

export function PhoneNumberInput() {
  const ref = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, selectionStart, selectionEnd } = e.target;
    const processed = processPhoneInput(value);
    setInputValue(processed);

    // Restore caret position on next tick
    setTimeout(() => {
      if (!ref.current) return;
      const selStart = selectionStart ?? processed.length;
      const selEnd = selectionEnd ?? processed.length;
      const prevChar = value[selStart - 1];
      const pos =
        (prevChar ? processed.indexOf(prevChar, Math.max(selEnd - 1, 0)) + 1 : 0) ||
        Math.max(selEnd, 0);
      ref.current.selectionStart = pos;
      ref.current.selectionEnd = pos;
    }, 0);
  };

  return (
    <input
      ref={ref}
      value={inputValue}
      onChange={onChange}
      inputMode="numeric"
      placeholder="(123)456-7890"
      data-testid="phone-number-input"
    />
  )
}