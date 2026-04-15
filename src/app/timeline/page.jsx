"use client";
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

const TimelinePage = () => {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const status = searchParams.get("status");

  const [history, setHistory] = useState([]);

  // ✅ prevent double save
  const hasSaved = useRef(false);

  // ✅ safe function to get localStorage data
  const getStoredData = () => {
    try {
      const data = localStorage.getItem("timeline");
      if (!data || data === "undefined") return [];
      return JSON.parse(data);
    } catch {
      return [];
    }
  };

  // ✅ add new entry (only once)
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

  // ✅ load existing history
  useEffect(() => {
    const stored = getStoredData();
    setHistory(stored);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Timeline History</h1>

      <div className="mt-5 space-y-4">
        {history.length === 0 && <p>No history yet</p>}

        {history.map((item, index) => (
          <div key={index} className="bg-green-200 p-4 rounded">
            <p>
              <span className="font-bold">{item.name}</span> - {item.type}
            </p>
            <p>Status: {item.status}</p>
            <p>Date: {item.date}</p>
            <p>Time: {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;