import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-gray-100 text-[#424242] p-8 font-serif">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
      <div>
        <h4 className="font-playfair font-bold mb-2 text-lg">About AmsterdamLore</h4>
        <p>Placeholder text for AmsterdamLore’s mission and community goals.</p>
      </div>
      <div>
        <h4 className="font-playfair font-bold mb-2 text-lg">Quick Links</h4>
        <ul>
          <li><Link to="/" className="hover:text-[#E91E63]">Home</Link></li>
          <li><Link to="/stories" className="hover:text-[#E91E63]">Stories</Link></li>
          <li><Link to="/submit" className="hover:text-[#E91E63]">Submit</Link></li>
          <li><Link to="/contact" className="hover:text-[#E91E63]">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-playfair font-bold mb-2 text-lg">Resources</h4>
        <ul>
          <li><Link to="/faq" className="hover:text-[#E91E63]">FAQ</Link></li>
          <li><Link to="/privacy" className="hover:text-[#E91E63]">Privacy</Link></li>
          <li><Link to="/terms" className="hover:text-[#E91E63]">Terms</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-playfair font-bold mb-2 text-lg">Newsletter</h4>
        <form className="space-y-2">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-[#E91E63] text-white py-2 rounded font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </footer>
);
