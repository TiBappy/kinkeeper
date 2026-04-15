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

const FriendDetailspage = async ({ params }) => {
  const { id } = await params;
  const friend = Friends.find((friend) => friend.id === parseInt(id));
  console.log("show me params", friend);
  return (
    <div className="bg-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-4 bg-green-300 p-4 space-y-5">
            <div className="cards text-center">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={100}
                height={100}
                className="mx-auto"
              ></Image>
              <h2 className="text-xl font-semibold my-3">{friend.name}</h2>
              <div className="flex flex-col gap-4">
                <div className="badge badge-soft badge-info mx-auto">
                  {friend.status}
                </div>
                <div className="badge badge-soft badge-success mx-auto">
                  {friend.tags[0]}
                </div>
              </div>
              <h1>{friend.bio}</h1>
              <p>email</p>
            </div>
            <div className="bg-white shadow-2xl py-4 text-center">
              <h1>Snooze 2 Weeks</h1>
            </div>
            <div className="bg-white shadow-lg py-4 text-center">
              <h1>Archive</h1>
            </div>
            <div className="bg-white shadow-lg py-4 text-center">
              <h1>Delete</h1>
            </div>
          </div>
          <div className="col-span-8 bg-red-200 p-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-yellow-400">
                <h1>{friend.days_since_contact}</h1>
                <p>Days Scince Contact</p>
              </div>
              <div className="bg-blue-600">
                <h1>{friend.goal}</h1>
                <p>Goal(Days)</p>
              </div>
              <div className="bg-purple-400">
                <h1>{friend.next_due_date}</h1>
                <p>Next Due</p>
              </div>
            </div>
            <div className="bg-cyan-300">
              <div className="flex justify-between items-center">
                <h1>Relationship Goal</h1>
                <button className="btn btn-ghost">Edit</button>
              </div>
              <p>
                Contact Every{" "}
                <span className="text-black font-bold">30 days</span>
              </p>
            </div>
            {/* Dyanmic Section */}
            <div className="bg-cyan-100">
              <div><p>Quick Check In</p></div>
              <div className="grid grid-cols-3">
                <div>
                  <Link href={`/timeline?type=call&id=${friend.id}&name=${friend.name}&status=${friend.status}`}>Call</Link>
                </div>
                <div>
                  <Link href={`/timeline?type=text&id=${friend.id}&name=${friend.name}&status=${friend.status}`}>Text</Link>
                </div>
                <div>
                  <Link href={`/timeline?type=video&id=${friend.id}&name=${friend.name}&status=${friend.status}`}>Video</Link>
                </div>
              </div>
            </div>
            <div>
                <p>this is updated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailspage;
