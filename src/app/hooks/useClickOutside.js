import { useEffect } from "react";

export default function useClickOutside({ eleRef, action }) {
  const handleClickOutside = (e) => {
    if (eleRef.current && !eleRef.current.contains(e.target)) {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return null;
}
