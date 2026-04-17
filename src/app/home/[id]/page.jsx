import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCall, MdOutlineTextsms,   } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { RiDeleteBinLine, RiNotificationSnoozeFill } from "react-icons/ri";
import { LuArchive } from "react-icons/lu";

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

const getStatusStyle = (status) => {
  if (status === "on_track") {
    return "bg-[#244D3F] text-white p-4";
  } else if (status === "almost_due") {
    return "bg-yellow-400 text-black";
  } else if (status === "overdue") {
    return "bg-red-500 text-white";
  } else {
    return "bg-gray-300 text-black";
  }
};
const FriendDetailspage = async ({ params }) => {
  const { id } = await params;
  const friend = Friends.find((friend) => friend.id === parseInt(id));
  console.log("show me params", friend);
  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
          <div className="md:col-span-4 p-4 space-y-5">
            <div className="cards text-center bg-white shadow-sm rounded-lg">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={100}
                height={100}
                className="mx-auto"
              ></Image>
              <h2 className="text-xl font-semibold my-3">{friend.name}</h2>
              <div className="flex flex-col gap-4">
                <div
                  className={`mx-auto px-3 py-1 rounded-full text-xs p-4 ${getStatusStyle(
                    friend.status,
                  )}`}
                >
                  {friend.status.replace("_", " ")}
                </div>
                <div className="badge badge-soft badge-success mx-auto">
                  {friend.tags[0]}
                </div>
              </div>
              <h1 className="italic mt-4">{friend.bio}</h1>
              <p>email</p>
            </div>
            <div className="bg-white shadow-sm py-3 text-center flex justify-center gap-3">
              <RiNotificationSnoozeFill className="text-2xl"></RiNotificationSnoozeFill>
              <h1>Snooze 2 Weeks</h1>
            </div>
            <div className="bg-white shadow-sm py-3 text-center flex justify-center gap-3">
              <LuArchive className="text-2xl"></LuArchive>
              <h1>Archive</h1>
            </div>
            <div className="bg-white shadow-sm py-3 text-center flex justify-center gap-3">
              <RiDeleteBinLine className="text-2xl"></RiDeleteBinLine>
              <h1>Delete</h1>
            </div>
          </div>
          <div className="md:col-span-8 p-4 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className=" text-center p-6 shadow-sm rounded-lg bg-white">
                <h1 className="text-2xl font-bold text-[#1d4235]">
                  {friend.days_since_contact}
                </h1>
                <p>Days Scince Contact</p>
              </div>
              <div className="text-center p-6 shadow-sm bg-white rounded-lg">
                <h1 className="text-2xl font-bold text-[#1d4235]">
                  {friend.goal}
                </h1>
                <p>Goal(Days)</p>
              </div>
              <div className="text-center p-6 shadow-sm bg-white rounded-lg">
                <h1 className="text-2xl font-bold text-[#1d4235] ">
                  {friend.next_due_date}
                </h1>
                <p>Next Due</p>
              </div>
            </div>
            <div className="shadow-sm p-6 rounded-lg bg-white">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Relationship Goal</h1>
                <button className="btn hidden md:flex">Edit</button>
              </div>
              <p>
                Contact Every{" "}
                <span className="text-black font-bold">30 days</span>
              </p>
            </div>
            {/* Dyanmic Section */}
            <div className="shadow-sm mt-5 bg-white rounded-lg p-6">
              <div>
                <p className="text-[#244D3F] font-semibold mb-3 px-5">Quick Check In</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-4">
                <div className="bg-[#F8FAFC] shadow-sm text-center p-4">
                  <Link
                    href={`/timeline?type=call&id=${friend.id}&name=${friend.name}&status=${friend.status}`}
                  >
                    <MdCall className="mx-auto mb-3 text-2xl"></MdCall>
                    Call
                  </Link>
                </div>
                <div className="bg-[#F8FAFC] shadow-sm text-center p-4">
                  <Link
                    href={`/timeline?type=text&id=${friend.id}&name=${friend.name}&status=${friend.status}`}
                  >
                    <MdOutlineTextsms className="mx-auto mb-3 text-2xl"></MdOutlineTextsms>
                    Text
                  </Link>
                </div>
                <div className="bg-[#F8FAFC] shadow-sm text-center p-4">
                  <Link
                    href={`/timeline?type=video&id=${friend.id}&name=${friend.name}&status=${friend.status}`}
                  >
                    <FaVideo className="mx-auto mb-3 text-2xl"></FaVideo>

                    Video
                  </Link>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailspage;
