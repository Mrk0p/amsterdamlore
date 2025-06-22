export const AwardsPanels = () => (
  <div className="max-w-7xl mx-auto p-4 grid sm:grid-cols-2 gap-4">
    <a
      href="https://top216.com/vote"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border border-[#424242] rounded-lg shadow p-4 hover:border-[#E91E63] transition"
    >
      <h4 className="font-playfair text-xl flex items-center gap-2">
        <span>🏆</span> Vote Top216
      </h4>
    </a>
    <a
      href="https://thetop36.com/highlights"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border border-[#424242] rounded-lg shadow p-4 hover:border-[#E91E63] transition"
    >
      <h4 className="font-playfair text-xl flex items-center gap-2">
        <span>✨</span> Explore TheTop36
      </h4>
    </a>
  </div>
);
