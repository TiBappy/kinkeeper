import React from 'react';

const Friends = [
  {
    "id": 2,
    "name": "Liam Smith",
    "picture": "https://example.com/photo2.jpg",
    "email": "liam.smith@example.com",
    "days_since_contact": 9,
    "status": "on_track",
    "tags": ["work", "developer"],
    "bio": "Frontend developer colleague.",
    "goal": 10,
    "next_due_date": "2025-07-16"
  },
  {
    "id": 3,
    "name": "Olivia Davis",
    "picture": "https://example.com/photo3.jpg",
    "email": "olivia.davis@example.com",
    "days_since_contact": 15,
    "status": "overdue",
    "tags": ["friend", "travel"],
    "bio": "Travel buddy from last trip.",
    "goal": 12,
    "next_due_date": "2025-07-11"
  },
  {
    "id": 4,
    "name": "Noah Wilson",
    "picture": "https://example.com/photo4.jpg",
    "email": "noah.wilson@example.com",
    "days_since_contact": 3,
    "status": "on_track",
    "tags": ["gym"],
    "bio": "Gym partner, very consistent.",
    "goal": 7,
    "next_due_date": "2025-07-21"
  },
  {
    "id": 5,
    "name": "Emma Taylor",
    "picture": "https://example.com/photo5.jpg",
    "email": "emma.taylor@example.com",
    "days_since_contact": 22,
    "status": "overdue",
    "tags": ["family"],
    "bio": "Close cousin, lives abroad.",
    "goal": 20,
    "next_due_date": "2025-07-08"
  },
  {
    "id": 6,
    "name": "William Brown",
    "picture": "https://example.com/photo6.jpg",
    "email": "william.brown@example.com",
    "days_since_contact": 6,
    "status": "on_track",
    "tags": ["business"],
    "bio": "Client from web project.",
    "goal": 14,
    "next_due_date": "2025-07-17"
  },
  {
    "id": 7,
    "name": "Ava Martinez",
    "picture": "https://example.com/photo7.jpg",
    "email": "ava.martinez@example.com",
    "days_since_contact": 18,
    "status": "overdue",
    "tags": ["school"],
    "bio": "School friend, loves art.",
    "goal": 10,
    "next_due_date": "2025-07-12"
  },
  {
    "id": 8,
    "name": "James Anderson",
    "picture": "https://example.com/photo8.jpg",
    "email": "james.anderson@example.com",
    "days_since_contact": 2,
    "status": "on_track",
    "tags": ["neighbor"],
    "bio": "Friendly neighbor nearby.",
    "goal": 5,
    "next_due_date": "2025-07-23"
  },
  {
    "id": 9,
    "name": "Mia Thomas",
    "picture": "https://example.com/photo9.jpg",
    "email": "mia.thomas@example.com",
    "days_since_contact": 27,
    "status": "overdue",
    "tags": ["college"],
    "bio": "College friend, now in another city.",
    "goal": 15,
    "next_due_date": "2025-07-06"
  },
  {
    "id": 10,
    "name": "Benjamin White",
    "picture": "https://example.com/photo10.jpg",
    "email": "benjamin.white@example.com",
    "days_since_contact": 4,
    "status": "on_track",
    "tags": ["startup"],
    "bio": "Startup co-founder connection.",
    "goal": 8,
    "next_due_date": "2025-07-19"
  }
]

const FriendDetailspage = ({params}) => {
    console.log(params);
    return (
        <div>
            <h2>Dynamic Cards section</h2>
        </div>
    );
};

export default FriendDetailspage;