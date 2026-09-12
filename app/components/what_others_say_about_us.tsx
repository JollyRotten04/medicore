import { Star } from "lucide-react";
import FadeIn from "../components/fade-in";

const reviews = [
    {
      name: "Maria Santos",
      username: "@maria.santos",
      rating: 5,
      comment: "The staff here genuinely cares. From check-in to follow-up, everything felt personal and unrushed. Dr. Reyes took the time to explain every step of my treatment.",
      initials: "MS",
    },
    {
      name: "James Cruz",
      username: "@jamescruz",
      rating: 5,
      comment: "Clean facilities, modern equipment, and the shortest wait time I've had at any clinic. Booking an appointment online was seamless too.",
      initials: "JC",
    },
    {
      name: "Angela Reyes",
      username: "@angela.r",
      rating: 4,
      comment: "Really compassionate care team. My father's recovery was smooth thanks to their attentiveness. Only wish parking was easier.",
      initials: "AR",
    },
    {
      name: "Paolo Ramirez",
      username: "@paoloramz",
      rating: 5,
      comment: "St. Raphael has been our family's go-to for years. Consistent quality, friendly nurses, and doctors who actually listen.",
      initials: "PR",
    },
  ];

export default function WhatOthersSayAboutUs() {
  return (
    <>
      <div className="h-dvh w-full shrink-0 overflow-y-auto flex flex-col justify-center bg-[#EDF3F6] px-4 py-10 dark:bg-gray-900/60">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest text-[#46667a] text-center uppercase dark:text-white">
            Testimonials
          </p>
          <p className="text-lg font-semibold text-center mt-1 mb-6 dark:text-white">
            What Others Say About Us
          </p>

          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            {reviews.map((review) => (
              <div
                key={review.username}
                className="flex flex-col gap-3 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 dark:bg-gray-800"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#46667a] text-white text-xs font-semibold shrink-0">
                      {review.initials}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold leading-tight dark:text-white">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-400 leading-tight">
                        {review.username}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className={
                          i < review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-200 text-gray-200"
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs font-light text-gray-600 leading-relaxed dark:text-white">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </>
  );
}