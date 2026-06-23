export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
      Built with React & Tailwind CSS · {new Date().getFullYear()}
    </footer>
  );
}
