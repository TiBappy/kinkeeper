"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Video, MessageCircle } from "lucide-react";

const TimelineContent = () => {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const status = searchParams.get("status");

  const [history, setHistory] = useState([]);

  // ✅ FILTER STATES
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchName, setSearchName] = useState("");

  const hasSaved = useRef(false);

  // ✅ SAFE LOCAL STORAGE
  const getStoredData = () => {
    try {
      const data = localStorage.getItem("timeline");
      if (!data || data === "undefined") return [];
      return JSON.parse(data);
    } catch {
      return [];
    }
  };

  // ✅ SAVE NEW ENTRY (ONCE)
  useEffect(() => {
    if (!type || hasSaved.current) return;

    hasSaved.current = true;

    const newEntry = {
      id,
      name,
      status,
      type,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const stored = getStoredData();
    const updated = [newEntry, ...stored];

    localStorage.setItem("timeline", JSON.stringify(updated));
    setHistory(updated);
  }, [type, id, name, status]);

  // ✅ LOAD EXISTING
  useEffect(() => {
    const stored = getStoredData();
    setHistory(stored);
  }, []);

  // ✅ FILTER LOGIC
  const filteredHistory = history.filter((item) => {
    const matchType = filterType === "all" || item.type === filterType;
    const matchStatus =
      filterStatus === "all" || item.status === filterStatus;
    const matchName = item.name
      ?.toLowerCase()
      .includes(searchName.toLowerCase());

    return matchType && matchStatus && matchName;
  });

  // ✅ ICON FUNCTION
  const getIcon = (type) => {
    switch (type) {
      case "call":
        return <Phone className="w-5 h-5 text-green-600" />;
      case "video":
        return <Video className="w-5 h-5 text-purple-600" />;
      default:
        return <MessageCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  // ✅ TYPE COLOR
  const getTypeColor = (type) => {
    switch (type) {
      case "call":
        return "bg-green-100 text-green-700";
      case "video":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  // ✅ STATUS COLOR
  const getStatusColor = (status) => {
    return status === "on_track"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Timeline History</h1>

      {/* ✅ FILTER UI */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm">
        <select
          className="border p-2 rounded-lg"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>

        <select
          className="border p-2 rounded-lg"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="on_track">On Track</option>
          <option value="overdue">Overdue</option>
        </select>

        <input
          type="text"
          placeholder="Search name..."
          className="border p-2 rounded-lg flex-1"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>

      {/* ✅ TIMELINE */}
      <div className="mt-6 space-y-4">
        {filteredHistory.length === 0 && (
          <p className="text-gray-500">No matching results</p>
        )}

        {filteredHistory.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-full">
                {getIcon(item.type)}
              </div>

              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.date} • {item.time}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 text-xs rounded-full ${getTypeColor(
                  item.type
                )}`}
              >
                {item.type}
              </span>

              <span
                className={`px-3 py-1 text-xs rounded-full ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineContent;