import { useState } from "react";

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
  "data-testid"?: string;
}

export function StarRating({ value, onChange, "data-testid": testId }: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number>(0);

  const stars = [1, 2, 3, 4, 5];
  const currentRating = hoverValue || value;

  return (
    <div className="flex justify-center gap-1" data-testid={testId}>
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          className={`text-6xl transition-all duration-300 hover:scale-110 transform cursor-pointer ${
            star <= currentRating
              ? "text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
              : "text-black hover:text-gray-800"
          }`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHoverValue(star)}
          onMouseLeave={() => setHoverValue(0)}
          data-testid={`star-${star}`}
          style={{
            filter: star <= currentRating ? "drop-shadow(0 0 8px #ffd700)" : "none",
            textShadow: star <= currentRating ? "0 0 10px #ffd700" : "none"
          }}
        >
          ★
        </button>
      ))}
    </div>
  );
}
