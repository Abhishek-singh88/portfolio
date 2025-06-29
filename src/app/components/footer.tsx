// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm py-8 border-t border-neutral-800 mt-16">
      © {new Date().getFullYear()} Abhishek Singh — All rights reserved.
    </footer>
  );
}
