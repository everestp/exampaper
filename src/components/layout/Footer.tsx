
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-study-700">exampaper</span>
              <span className="text-xl text-muted-foreground">.org</span>
            </Link>
          
          </div>
          <div>
            <h3 className="font-medium mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-study-700">About</Link></li>
              <li><Link to="/contact" className="hover:text-study-700">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-study-700">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-study-700">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-study-700">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          &copy; {currentYear} exampaper.org. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
