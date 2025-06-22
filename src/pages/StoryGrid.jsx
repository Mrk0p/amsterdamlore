import { useEffect, useState } from "react";

const mockStories = [
  {
    id: 1,
    title: "Whispers by the Westerkerk",
    snippet: "A local recalls a mysterious song that echoes through the Westerkerk canal every autumn evening.",
    imageUrl: "https://picsum.photos/200/300 ",
  },
  {
    id: 2,
    title: "Bicycle Ghost",
    snippet: "An abandoned bicycle on a bridge tells tales of its lost owner, seen only in reflections.",
    imageUrl: "https://picsum.photos/200/300 ",
  },
  {
    id: 3,
    title: "Poem on the Wall",
    snippet: "Hidden behind ivy, a fading poem in De Pijp stirs emotions of long-lost love.",
    imageUrl: "https://picsum.photos/200/300 ",
  },
  {
    id: 4,
    title: "The Painted Brick",
    snippet: "Each color on this Jordaan wall was added by a different artist over decades.",
    imageUrl: "https://picsum.photos/200/300 ",
  },
  {
    id: 5,
    title: "Canal-side Letter",
    snippet: "A message in a bottle, fished from the Herengracht, reveals wartime secrets.",
    imageUrl: "https://picsum.photos/200/300 ",
  },
  {
    id: 6,
    title: "Clock of Secrets",
    snippet: "Locals say the tower clock near Nieuwmarkt hides a rhythm only night owls hear.",
    imageUrl: "https://picsum.photos/200/300 ",
  },
];

export const StoryGrid = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate fetch success:
    try {
      setStories(mockStories);
    } catch {
      setError(true);
    }
  }, []);

  if (error)
    return (
      <div className="bg-red-200 p-4 text-red-800 font-serif font-semibold">
        ⚠️ Unable to load stories.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map(({ id, title, snippet, imageUrl }) => (
        <div
          key={id}
          className="relative rounded-lg overflow-hidden shadow-lg bg-white"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[200px] object-cover"
            width={300}
            height={200}
          />
          <div className="p-4">
            <h3 className="font-playfair text-2xl text-[#424242]">{title}</h3>
            <p className="font-lora text-base text-gray-700 mt-2">{snippet}</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-[#E91E63] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-lora text-sm">Read More</span>
          </div>
        </div>
      ))}
    </div>
  );
};
