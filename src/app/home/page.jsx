import React from "react";
import Image from "next/image";
import Link from "next/link";

const Friends = [
  {
    id: 2,
    name: "Liam Smith",
    picture: "/Liam Smith.png",
    email: "liam.smith@example.com",
    days_since_contact: 9,
    status: "on_track",
    tags: ["work", "developer"],
    bio: "Frontend developer colleague.",
    goal: 10,
    next_due_date: "2025-07-16",
  },
  {
    id: 3,
    name: "Olivia Davis",
    picture: "/Olivia Davis.png",
    email: "olivia.davis@example.com",
    days_since_contact: 15,
    status: "overdue",
    tags: ["friend", "travel"],
    bio: "Travel buddy from last trip.",
    goal: 12,
    next_due_date: "2025-07-11",
  },
  {
    id: 4,
    name: "Noah Wilson",
    picture: "/Noah Wilson.png",
    email: "noah.wilson@example.com",
    days_since_contact: 3,
    status: "on_track",
    tags: ["gym"],
    bio: "Gym partner, very consistent.",
    goal: 7,
    next_due_date: "2025-07-21",
  },
  {
    id: 5,
    name: "Emma Taylor",
    picture: "/Emma Taylor.png",
    email: "emma.taylor@example.com",
    days_since_contact: 22,
    status: "overdue",
    tags: ["family"],
    bio: "Close cousin, lives abroad.",
    goal: 20,
    next_due_date: "2025-07-08",
  },
  {
    id: 6,
    name: "William Brown",
    picture: "/William Brown.png",
    email: "william.brown@example.com",
    days_since_contact: 6,
    status: "on_track",
    tags: ["business"],
    bio: "Client from web project.",
    goal: 14,
    next_due_date: "2025-07-17",
  },
  {
    id: 7,
    name: "Ava Martinez",
    picture: "/Ava Martinez.png",
    email: "ava.martinez@example.com",
    days_since_contact: 18,
    status: "overdue",
    tags: ["school"],
    bio: "School friend, loves art.",
    goal: 10,
    next_due_date: "2025-07-12",
  },
  {
    id: 8,
    name: "James Anderson",
    picture: "/James Anderson.png",
    email: "james.anderson@example.com",
    days_since_contact: 2,
    status: "on_track",
    tags: ["neighbor"],
    bio: "Friendly neighbor nearby.",
    goal: 5,
    next_due_date: "2025-07-23",
  },
  {
    id: 9,
    name: "Mia Thomas",
    picture: "/Mia Thomas.png",
    email: "mia.thomas@example.com",
    days_since_contact: 27,
    status: "overdue",
    tags: ["college"],
    bio: "College friend, now in another city.",
    goal: 15,
    next_due_date: "2025-07-06",
  },
  {
    id: 10,
    name: "Benjamin White",
    picture: "/Benjamin White.png",
    email: "benjamin.white@example.com",
    days_since_contact: 4,
    status: "on_track",
    tags: ["startup"],
    bio: "Startup co-founder connection.",
    goal: 8,
    next_due_date: "2025-07-19",
  },
];


const Homepage = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Friends.map((friend) => (
            <Link  href={`/home/${friend.id}`}
              className="p-4 text-center rounded-2xl shadow-md bg-white hover:shadow-xl transition duration-300 cursor-pointer"
              key={friend.id}
            >
              <Image
                src={friend.picture}
                alt={friend.name}
                width={100}
                height={100}
                className="mx-auto rounded-full border-4 border-green-100"
              />

              <h2 className="text-lg font-semibold text-center mt-3">
                {friend.name}
              </h2>
              <p className="text-sm text-gray-500 text-center">
                {friend.days_since_contact} days Ago
              </p>

              {/* Status Badge */}

              
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Homepage;
