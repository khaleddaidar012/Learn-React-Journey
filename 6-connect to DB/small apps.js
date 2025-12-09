// ============================
// MINI PROJECTS FOR FETCH / POST / DELETE
// ============================
// كل مشروع جاهز ترفعه على GitHub وعليه Backend وهمي تشتغل عليه
// هعملك 3 مشاريع:
// 1) fetch-demo
// 2) post-demo
// 3) delete-demo
// كل مشروع فيه:
// - Frontend بسيط (React)
// - Backend وهمي عبارة عن Express Server
// - Routes مناسبة
// ============================

/*
========================================================
📁 PROJECT 1 — FETCH DEMO
========================================================
Structure:
fetch-demo/
  ├── backend/
  │     └── server.js
  ├── frontend/
  │     ├── package.json
  │     ├── src/
  │     │     └── App.js
  │     └── index.html
========================================================
*/

// backend/server.js
const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, title: "First post" },
    { id: 2, title: "Second post" }
  ]);
});

app.listen(PORT, () => console.log(`Fetch API running on ${PORT}`));


// frontend/src/App.js
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>Fetch Demo</h1>
      {data.map(p => <p key={p.id}>{p.title}</p>)}
    </div>
  );
}


/*
========================================================
📁 PROJECT 2 — POST DEMO
========================================================
post-demo/
  ├── backend/server.js
  ├── frontend/src/App.js
========================================================
*/

// backend/server.js
const express2 = require("express");
const app2 = express2();
app2.use(express2.json());

let messages = [];

app2.post("/api/message", (req, res) => {
  const msg = { id: Date.now(), text: req.body.text };
  messages.push(msg);
  res.json(msg);
});

app2.get("/api/message", (req, res) => {
  res.json(messages);
});

app2.listen(6000, () => console.log("POST API running on 6000"));

// frontend/src/App.js
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState([]);

  const send = async () => {
    const res = await fetch("http://localhost:6000/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const data = await res.json();
    setMsgs(prev => [...prev, data]);
  };

  return (
    <div>
      <h1>POST Demo</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={send}>Send</button>

      {msgs.map(m => <p key={m.id}>{m.text}</p>)}
    </div>
  );
}


/*
========================================================
📁 PROJECT 3 — DELETE DEMO
========================================================
delete-demo/
  ├── backend/server.js
  ├── frontend/src/App.js
========================================================
*/

// backend/server.js
const express3 = require("express");
const app3 = express3();

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" }
];

app3.get("/api/items", (req, res) => res.json(items));

app3.delete("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  items = items.filter(i => i.id !== id);
  res.json({ message: "Deleted", id });
});

app3.listen(7000, () => console.log("DELETE API running on 7000"));

// frontend/src/App.js
import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const load = () => {
    fetch("http://localhost:7000/api/items")
      .then(res => res.json())
      .then(setItems);
  };

  const del = async (id) => {
    await fetch(`http://localhost:7000/api/items/${id}`, { method: "DELETE" });
    load();
  };

  useEffect(load, []);

  return (
    <div>
      <h1>Delete Demo</h1>
      {items.map(i => (
        <div key={i.id}>
          {i.name}
          <button onClick={() => del(i.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
